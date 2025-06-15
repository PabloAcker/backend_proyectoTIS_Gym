const generarDieta = async (req, res) => {
  const { peso, estatura, actividad, objetivo, edad } = req.body;

  if (!peso || !estatura || !actividad || !objetivo || !edad) {
    return res.status(400).json({ error: "Faltan datos obligatorios." });
  }

  const prompt = `
Genera una dieta personalizada en español para una persona con:
- Peso: ${peso}
- Estatura: ${estatura}
- Ejercicio semanal: ${actividad} días
- Objetivo: ${objetivo}
- Edad: ${edad}
Incluye desayuno, almuerzo, cena y snacks para un día tipo.
`;

  try {
    const response = await fetch("https://api.cohere.ai/v1/chat", {
      method: "POST",
      headers: {
        "Authorization": "Bearer vvNlMQxRGyHJ59IbrVGgTJcYV3leD3n9hnkLLqNI",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "command-r-plus",
        message: prompt,
        temperature: 0.7,
        max_tokens: 300,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("❌ Error al llamar a Cohere:", errorBody);
      return res.status(500).json({ error: "Error al generar la dieta con Cohere." });
    }

    const data = await response.json();
    const respuesta = data.text || "No se pudo generar una respuesta.";
    res.json({ respuesta });

  } catch (error) {
    console.error("❌ Error inesperado:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
};

module.exports = {
  generarDieta,
};