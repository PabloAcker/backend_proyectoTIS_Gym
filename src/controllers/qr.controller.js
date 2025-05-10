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

// GET /qrs → Listar todos los QRs
const getAllQrs = async (req, res) => {
  try {
    const qrs = await prisma.qrs.findMany({
      orderBy: {
        generated_at: 'desc'
      }
    });

    res.json(qrs);
  } catch (error) {
    console.error('Error al obtener QRs:', error);
    res.status(500).json({ error: 'Error interno al obtener los QRs' });
  }
};

module.exports = {
  createQr,
  getAllQrs
};
