const prisma = require('../prisma/client');

// GET /branches → Obtener todas las sucursales
const getAllBranches = async (req, res) => {
  try {
    const branches = await prisma.branches.findMany();
    res.json(branches);
  } catch (error) {
    console.error("Error al obtener sucursales:", error);
    res.status(500).json({ error: "Error al obtener sucursales" });
  }
};

// POST /branches → Crear una nueva sucursal
const createBranch = async (req, res) => {
  const { name, address, services, coordinates } = req.body;

  if (!name || !coordinates?.lat || !coordinates?.lng) {
    return res.status(400).json({ error: "Nombre y coordenadas son obligatorias" });
  }

  try {
    const newBranch = await prisma.branches.create({
      data: {
        name,
        address,
        services,
        coordinates,
      }
    });

    res.status(201).json({ message: "Sucursal creada exitosamente", branch: newBranch });
  } catch (error) {
    console.error("Error al crear sucursal:", error);
    res.status(500).json({ error: "Error al crear la sucursal" });
  }
};

module.exports = {
  getAllBranches,
  createBranch
};
