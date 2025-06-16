const { callCohere } = require('../services/cohere.service');

const generarIA = async (req, res) => {
  const { tipo, peso, estatura, actividad, objetivo, edad } = req.body;

  if (!tipo || !peso || !estatura || !actividad || !objetivo || !edad) {
    return res.status(400).json({
      error: "Faltan campos obligatorios: tipo, peso, estatura, actividad, objetivo, edad."
    });
  }

  try {
    const respuesta = await callCohere({ tipo, peso, estatura, actividad, objetivo, edad });
    res.json({ respuesta });
  } catch (error) {
    console.error("❌ Error en generación IA:", error.message);
    res.status(500).json({ error: "Error interno generando respuesta con IA" });
  }
};

module.exports = { generarIA };
