const prisma = require('../prisma/client');

// POST /memberships → Crear un nuevo plan de membresía
const createMembership = async (req, res) => {
  try {
    const { name, description, duration, price } = req.body;

    if (!name || !duration || !price) {
      return res.status(400).json({ error: 'Faltan datos obligatorios: nombre, duración y precio' });
    }

    const newMembership = await prisma.memberships.create({
      data: {
        name,
        description,
        duration,
        price,
        status: true
      }
    });

    res.status(201).json({ message: 'Membresía creada exitosamente', membership: newMembership });
  } catch (error) {
    console.error('Error al crear membresía:', error);
    res.status(500).json({ error: 'Error interno al crear la membresía' });
  }
};

const getAllMemberships = async (req, res) => {
  try {
    const userId = req.query.userId ? parseInt(req.query.userId) : null;

    const memberships = await prisma.memberships.findMany({
      where: { status: true }
    });

    // Si no se pasa userId, retornar normalmente
    if (!userId) return res.json(memberships);

    // Traer todas las suscripciones del usuario ordenadas por fecha
    const userSubscriptions = await prisma.subscriptions.findMany({
      where: { user_id: userId },
      orderBy: { start_date: 'asc' },
      include: { membership: true },
    });

    // Agrupar por plan
    const grouped = {};
    for (const sub of userSubscriptions) {
      const key = sub.membership_id;
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(sub);
    }

    const discountedMemberships = memberships.map((m) => {
      let discounted_price = null;

      const subs = grouped[m.id] || [];

      // Filtrar suscripciones consecutivas
      if (m.name.toLowerCase().includes("mensual") && subs.length >= 3) {
        const last3 = subs.slice(-3);
        if (
          isConsecutive(last3[0].end_date, last3[1].start_date) &&
          isConsecutive(last3[1].end_date, last3[2].start_date)
        ) {
          discounted_price = parseFloat((m.price * 0.85).toFixed(2)); // 15%
        }
      } else if (m.name.toLowerCase().includes("trimestral") && subs.length >= 2) {
        const last2 = subs.slice(-2);
        if (isConsecutive(last2[0].end_date, last2[1].start_date)) {
          discounted_price = parseFloat((m.price * 0.80).toFixed(2)); // 20%
        }
      } else if (subs.length > 0) {
        const lastSub = subs[subs.length - 1];
        if (lastSub.membership.name.toLowerCase().includes("anual")) {
          discounted_price = parseFloat((m.price * 0.75).toFixed(2)); // 25%
        }
      }

      return {
        ...m,
        discounted_price,
      };
    });

    res.json(discountedMemberships);
  } catch (error) {
    console.error("Error al obtener las membresías con descuentos:", error);
    res.status(500).json({ error: "Error interno al obtener las membresías" });
  }
};

// Función auxiliar
function isConsecutive(prevEnd, nextStart) {
  const oneDayMs = 24 * 60 * 60 * 1000;
  const diff = new Date(nextStart).getTime() - new Date(prevEnd).getTime();
  return diff >= 0 && diff <= oneDayMs;
}

  const deleteMembership = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Verificar si hay suscripciones con este plan
      const hasSubscriptions = await prisma.subscriptions.findFirst({
        where: { membership_id: Number(id) }
      });
  
      if (hasSubscriptions) {
        return res.status(403).json({ error: 'No se puede eliminar: este plan tiene suscripciones activas' });
      }
  
      const deleted = await prisma.memberships.delete({
        where: { id: Number(id) }
      });
  
      res.json({ message: 'Membresía eliminada correctamente', membership: deleted });
    } catch (error) {
      console.error('Error al eliminar membresía:', error);
      res.status(500).json({ error: 'Error interno al eliminar la membresía' });
    }
  };  

  const getMembershipById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const membership = await prisma.memberships.findUnique({
        where: {
          id: Number(id)
        }
      });
  
      if (!membership) {
        return res.status(404).json({ error: 'Membresía no encontrada' });
      }
  
      res.json(membership);
    } catch (error) {
      console.error('Error al obtener la membresía:', error);
      res.status(500).json({ error: 'Error interno al obtener la membresía' });
    }
  };

  const updateMembership = async (req, res) => {
  const { id } = req.params;
  const { name, description, duration, price, status } = req.body;

  try {
    const existing = await prisma.memberships.findUnique({
      where: { id: Number(id) }
    });

    if (!existing) {
      return res.status(404).json({ error: 'Membresía no encontrada' });
    }

    const updated = await prisma.memberships.update({
      where: { id: Number(id) },
      data: {
        name,
        description,
        duration,
        price,
        status
      }
    });

    res.json({
      message: 'Membresía actualizada correctamente',
      membership: updated
    });
  } catch (error) {
    console.error('Error al actualizar la membresía:', error);
    res.status(500).json({ error: 'Error interno al actualizar la membresía' });
  }
};

module.exports = {
  createMembership,
  getAllMemberships,
  getMembershipById,
  deleteMembership,
  updateMembership
}; 
