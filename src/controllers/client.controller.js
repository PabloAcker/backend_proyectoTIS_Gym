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

// GET /clients → Lista todos los clientes con datos de usuario
const getAllClients = async (req, res) => {
  try {
    const clients = await prisma.clients.findMany({
      include: {
        user: true
      }
    });

// Mapea para que el frontend reciba los datos planos
const formatted = clients.map((c) => ({
  id: c.id,
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
  const { ci, birthdate, name, lastname, email } = req.body;

  try {
    const client = await prisma.clients.findUnique({
      where: { id: Number(id) },
      include: { user: true },
    });

    if (!client) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }

    // Actualizar ambos: cliente y su usuario asociado
    const updatedClient = await prisma.clients.update({
      where: { id: Number(id) },
      data: {
        ci,
        birthdate: new Date(birthdate),
        user: {
          update: {
            name,
            lastname,
            email,
          },
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