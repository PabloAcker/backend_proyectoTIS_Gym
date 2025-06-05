const prisma = require('../prisma/client');
const bcrypt = require('bcrypt');

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.users.findMany({
      where: { status: true }
    });
    res.json(users);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, lastname, email, password, role } = req.body;

    if (!name || !lastname || !email || !password || !role) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const allowedRoles = ['admin', 'empleado', 'cliente'];
    if (!allowedRoles.includes(role)) {
      return res.status(400).json({ error: 'Rol no permitido' });
    }

    const existingUser = await prisma.users.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: 'El email ya está registrado' });
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10); // 10 salt rounds

    const newUser = await prisma.users.create({
      data: {
        name,
        lastname,
        email,
        password: hashedPassword,
        role,
      }
    });

    res.status(201).json({ message: 'Usuario creado exitosamente', id: newUser.id });
  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
};

  const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await prisma.users.findUnique({
        where: { id: Number(id) },
      });
  
      if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
  
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error al buscar usuario' });
    }
  };

// ✅ Lógica de restricción para modificar nombre y apellido cada 30 días
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, lastname, email, role, status, password } = req.body;

  try {
    const user = await prisma.users.findUnique({
      where: { id: Number(id) }
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const now = new Date();
    const lastUpdate = user.name_updated_at;
    const canUpdateName =
      !lastUpdate || now.getTime() - new Date(lastUpdate).getTime() > 30 * 24 * 60 * 60 * 1000;

    const updates = {
      email,
      role,
      status
    };

    if ((name || lastname) && canUpdateName) {
      updates.name = name;
      updates.lastname = lastname;
      updates.name_updated_at = now;
    } else if ((name || lastname) && !canUpdateName) {
      return res.status(403).json({
        error: "Solo puedes modificar tu nombre o apellido una vez cada 30 días",
      });
    }

    if (password) {
      const hashed = await bcrypt.hash(password, 10);
      updates.password = hashed;
    }

    const updatedUser = await prisma.users.update({
      where: { id: Number(id) },
      data: updates
    });

    res.json(updatedUser);
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
};

  const deleteUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await prisma.users.update({
        where: { id: Number(id) },
        data: { status: false }
      });
  
      res.json({ message: 'Usuario dado de baja correctamente', user });
    } catch (error) {
      console.error("Error al dar de baja:", error);
      res.status(500).json({ error: 'Error al dar de baja al usuario' });
    }
  };  

  // GET /users/all → listar todos los usuarios sin filtrar por estado
const getAllUsersRaw = async (req, res) => {
  try {
    const users = await prisma.users.findMany(); // sin filtro de status
    res.json(users);
  } catch (error) {
    console.error("Error al obtener todos los usuarios:", error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

// PUT /users/:id/restore → reactivar usuario
const restoreUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.users.update({
      where: { id: Number(id) },
      data: { status: true }
    });

    res.json({ message: 'Usuario reactivado correctamente', user });
  } catch (error) {
    console.error("Error al reactivar usuario:", error);
    res.status(500).json({ error: 'Error al reactivar usuario' });
  }
};
// GET /users/employees → Solo empleados y admins
const getEmployees = async (req, res) => {
  try {
    const employees = await prisma.users.findMany({
      where: {
        role: { in: ['empleado', 'admin'] }
      },
      orderBy: { created_at: 'desc' }
    });

    res.json(employees);
  } catch (error) {
    console.error("Error al obtener empleados:", error);
    res.status(500).json({ error: "Error al obtener empleados" });
  }
};

  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getAllUsersRaw,
    restoreUser,
    getEmployees
  };  