const prisma = require('../prisma/client');

// GET /rfid-logs → Obtener todos los registros
// rfidLog.controller.js
const getAllRfidLogs = async (req, res) => {
  try {
    const logs = await prisma.rfid_logs.findMany({
      include: {
        rfid_access: true,
        subscription: {
        include: {
            user: {
            include: {
                client: true // <- Añade esta línea
            }
            },
            membership: true
        }
        }
      },
      orderBy: { entry_date: 'desc' } // CAMBIO AQUÍ
    });
    res.json(logs);
  } catch (error) {
    console.error("Error al obtener registros RFID:", error);
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

// POST /rfid-logs → Registrar nuevo ingreso/salida
const createRfidLog = async (req, res) => {
  const { rfid_access_id, subscription_id, entry_date, exit_date } = req.body;

  if (!rfid_access_id || !subscription_id) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  try {
    const newLog = await prisma.rfid_logs.create({
      data: {
        rfid_access_id,
        subscription_id,
        entry_date: entry_date ? new Date(entry_date) : undefined,
        exit_date: exit_date ? new Date(exit_date) : undefined
      }
    });
    res.status(201).json({ message: "Registro creado exitosamente", log: newLog });
  } catch (error) {
    console.error("Error al crear registro:", error);
    res.status(500).json({ error: "Error al crear el registro" });
  }
};

// PUT /rfid-logs/:id → Actualizar un log
const updateRfidLog = async (req, res) => {
  const { id } = req.params;
  const { entry_date, exit_date } = req.body;

  try {
    const updated = await prisma.rfid_logs.update({
      where: { id: Number(id) },
      data: {
        entry_date: entry_date ? new Date(entry_date) : undefined,
        exit_date: exit_date ? new Date(exit_date) : undefined
      }
    });

    res.json({ message: "Registro actualizado", log: updated });
  } catch (error) {
    console.error("Error al actualizar registro:", error);
    res.status(500).json({ error: "Error al actualizar el registro" });
  }
};

// DELETE /rfid-logs/:id
const deleteRfidLog = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.rfid_logs.delete({
      where: { id: Number(id) }
    });

    res.json({ message: "Registro eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar registro:", error);
    res.status(500).json({ error: "Error al eliminar el registro" });
  }
};

module.exports = {
  getAllRfidLogs,
  createRfidLog,
  updateRfidLog,
  deleteRfidLog
};
