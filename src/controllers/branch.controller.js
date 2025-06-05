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

// PUT /branches/:id → Editar sucursal
const updateBranch = async (req, res) => {
  const { id } = req.params;
  const { name, address, services, coordinates } = req.body;

  try {
    const updatedBranch = await prisma.branches.update({
      where: { id: Number(id) },
      data: {
        name,
        address,
        services,
        coordinates,
      }
    });

    res.json({ message: "Sucursal actualizada exitosamente", branch: updatedBranch });
  } catch (error) {
    console.error("Error al actualizar sucursal:", error);
    res.status(500).json({ error: "Error al actualizar la sucursal" });
  }
};

// DELETE /branches/:id → Eliminar sucursal
const deleteBranch = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.branches.delete({
      where: { id: Number(id) }
    });

    res.json({ message: "Sucursal eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar sucursal:", error);
    res.status(500).json({ error: "Error al eliminar la sucursal" });
  }
};

module.exports = {
  getAllBranches,
  createBranch,
  updateBranch,
  deleteBranch
};
