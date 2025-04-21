const prisma = require('../prisma/client');

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.users.findMany(); // usa el modelo generado por Prisma
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
  
      // Validar roles permitidos
      const allowedRoles = ['admin', 'empleado', 'cliente'];
      if (!allowedRoles.includes(role)) {
        return res.status(400).json({ error: 'Rol no permitido' });
      }
  
      // Verificar que el email no esté registrado
      const existingUser = await prisma.users.findUnique({ where: { email } });
      if (existingUser) {
        return res.status(409).json({ error: 'El email ya está registrado' });
      }
  
      const newUser = await prisma.users.create({
        data: {
          name,
          lastname,
          email,
          password,
          role,
        }
      });
  
      res.status(201).json(newUser);
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

  const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, lastname, email, role, status } = req.body;
  
    try {
      const user = await prisma.users.update({
        where: { id: Number(id) },
        data: {
          name,
          lastname,
          email,
          role,
          status
        }
      });
  
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar usuario' });
    }
  };

  const deleteUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      await prisma.users.delete({
        where: { id: Number(id) },
      });
  
      res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar usuario' });
    }
  };  

  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  };  