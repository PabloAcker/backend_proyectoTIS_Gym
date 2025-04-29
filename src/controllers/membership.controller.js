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
      const memberships = await prisma.memberships.findMany({
        where: {
          user_id: null // 📌 Mostramos solo los planes generales, no asignaciones
        }
      });
  
      res.json(memberships);
    } catch (error) {
      console.error('Error al obtener las membresías:', error);
      res.status(500).json({ error: 'Error interno al obtener las membresías' });
    }
  };

module.exports = {
  createMembership,
  getAllMemberships
};
