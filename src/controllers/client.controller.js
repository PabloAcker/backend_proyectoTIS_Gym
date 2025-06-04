const prisma = require('../prisma/client');
const bcrypt = require('bcrypt');

// POST /clients → Crea usuario + cliente
const createClient = async (req, res) => {
  try {
    const { name, lastname, email, password, ci, birthdate } = req.body;

    // Verificar campos obligatorios
    if (!name || !lastname || !email || !password || !ci) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    // Verificar si ya existe el email
    const existing = await prisma.users.findUnique({ where: { email } });
    if (existing) {
      return res.status(409).json({ error: 'Email ya registrado' });
    }

// Crear usuario y cliente en una transacción
const newClient = await prisma.$transaction(async (tx) => {
    const hashedPassword = await bcrypt.hash(password, 10); // ← 🔒
  
    const user = await tx.users.create({
      data: {
        name,
        lastname,
        email,
        password: hashedPassword, // ← Usar password encriptado
        role: 'cliente',
        status: true
      }
    });
  
    const client = await tx.clients.create({
      data: {
        user_id: user.id,
        ci,
        birthdate: birthdate ? new Date(birthdate) : null
      }
    });
  
    return { user, client };
  });  

    res.status(201).json(newClient);
  } catch (error) {
    console.error('Error al crear cliente:', error);
    res.status(500).json({ error: 'Error al crear el cliente' });
  }
};

// GET /clients → Lista solo clientes con suscripciones aprobadas
const getAllClients = async (req, res) => {
  try {
    const clients = await prisma.clients.findMany({
      include: {
        user: {
          include: {
            subscriptions: {
              where: {
                state: 'aprobado'
              }
            }
          }
        }
      }
    });

    // Filtrar solo si hay al menos una suscripción aprobada
    const filtered = clients.filter(
      (c) => c.user?.subscriptions?.length > 0
    );

    // Formatear la respuesta para el frontend
    const formatted = filtered.map((c) => ({
      id: c.id,
      user_id: c.user_id,
      ci: c.ci,
      birthdate: c.birthdate,
      name: c.user?.name || "",
      lastname: c.user?.lastname || "",
      email: c.user?.email || "",
    }));

    res.json(formatted);
  } catch (error) {
    console.error("Error al obtener clientes:", error);
    res.status(500).json({ error: "Error al obtener clientes" });
  }
};

const updateClient = async (req, res) => {
  const { id } = req.params;
  const { ci, birthdate, name, lastname, password } = req.body;

  try {
    const client = await prisma.clients.findUnique({
      where: { id: Number(id) },
      include: { user: true },
    });

    if (!client) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }

    const updates = {
      ci,
      birthdate: birthdate ? new Date(birthdate) : undefined,
    };

    const now = new Date();
    const lastUpdate = client.user.name_updated_at; // ← CORREGIDO
    const canUpdateName =
      !lastUpdate || now.getTime() - new Date(lastUpdate).getTime() > 30 * 24 * 60 * 60 * 1000;

    const userUpdates = {};

    if ((name || lastname) && canUpdateName) {
      userUpdates.name = name;
      userUpdates.lastname = lastname;
      userUpdates.name_updated_at = now; // ← CORREGIDO
    } else if ((name || lastname) && !canUpdateName) {
      const nextAvailableDate = new Date(lastUpdate);
      nextAvailableDate.setDate(nextAvailableDate.getDate() + 30);

      return res.status(403).json({
        error: "Solo puedes modificar tu nombre o apellido una vez cada 30 días",
        nextUpdateAllowed: nextAvailableDate.toISOString().split("T")[0],
      });
    }

    if (password) {
      const hashed = await bcrypt.hash(password, 10);
      userUpdates.password = hashed;
    }

    // Actualizar cliente y usuario
    const updatedClient = await prisma.clients.update({
      where: { id: Number(id) },
      data: {
        ...updates,
        user: {
          update: userUpdates,
        },
      },
      include: { user: true },
    });

    res.json(updatedClient);
  } catch (error) {
    console.error("Error al actualizar cliente:", error);
    res.status(500).json({ error: "Error al actualizar cliente" });
  }
};

const deleteClient = async (req, res) => {
  const { id } = req.params;

  try {
    // Verificar si el cliente existe
    const client = await prisma.clients.findUnique({
      where: { id: Number(id) },
    });

    if (!client) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }

    // Eliminar cliente y usuario en transacción
    await prisma.$transaction(async (tx) => {
      await tx.clients.delete({
        where: { id: Number(id) }
      });

      await tx.users.delete({
        where: { id: client.user_id }
      });
    });

    res.json({ message: "Cliente eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar cliente:", error);
    res.status(500).json({ error: "Error al eliminar cliente" });
  }
};

module.exports = {
  createClient,
  getAllClients,
  updateClient,
  deleteClient
};