const prisma = require('../prisma/client');

// POST /qrs → Crear un nuevo QR
const createQr = async (req, res) => {
  const { image, description } = req.body;

  try {
    if (!image) {
      return res.status(400).json({ error: 'La imagen del QR es obligatoria' });
    }

    const newQr = await prisma.qrs.create({
      data: {
        image,
        generated_at: new Date(),
        description
      }
    });

    res.status(201).json({
      message: 'QR creado exitosamente',
      qr: newQr
    });
  } catch (error) {
    console.error('Error al crear QR:', error);
    res.status(500).json({ error: 'Error interno al crear el QR' });
  }
};

// GET /qrs → Devolver solo el QR más reciente
const getLatestQr = async (req, res) => {
  try {
    const latest = await prisma.qrs.findFirst({
      orderBy: { generated_at: 'desc' }
    });

    if (!latest) {
      return res.status(404).json({ error: "No hay códigos QR aún" });
    }

    res.json(latest); // Devuelve un objeto, no un array
  } catch (error) {
    console.error("Error al obtener QR:", error);
    res.status(500).json({ error: "Error interno al obtener QR" });
  }
};

module.exports = {
  createQr,
  getLatestQr
};
