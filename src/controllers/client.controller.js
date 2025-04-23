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

    res.json(clients);
  } catch (error) {
    console.error('Error al obtener clientes:', error);
    res.status(500).json({ error: 'Error al obtener los clientes' });
  }
};

module.exports = {
  createClient,
  getAllClients
};