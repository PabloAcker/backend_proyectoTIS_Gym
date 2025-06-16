const fetch = require("node-fetch");

const callCohere = async ({ tipo, peso, estatura, actividad, objetivo, edad }) => {
  let prompt = "";

  if (tipo === "dieta") {
    prompt = `
You are a professional nutritionist. Generate a personalized **diet plan in Spanish** for a person with the following characteristics:
- Weight: ${peso}
- Height: ${estatura}
- Exercise days per week: ${actividad}
- Goal: ${objetivo}
- Age: ${edad}

The response must be **written in Spanish** and structured clearly. Include:
- A short introduction.
- A full daily meal plan (breakfast, lunch, dinner, snacks).
- Important notes or disclaimers if necessary.
Keep it detailed but easy to read.
    `;
  } else if (tipo === "rutina") {
    prompt = `
You are a certified fitness trainer. Create a personalized **training routine in Spanish** for a person with the following characteristics:
- Weight: ${peso}
- Height: ${estatura}
- Exercise days per week: ${actividad}
- Goal: ${objetivo}
- Age: ${edad}

The response must be **written in Spanish** and include:
- Introduction with context.
- Complete weekly workout plan (day-by-day).
- Suggested duration, sets, reps, rest.
- Warnings or advice based on the profile.

The routine should be effective, motivating, and safe.
    `;
  } else {
    throw new Error("Tipo inválido. Usa 'dieta' o 'rutina'.");
  }

  const response = await fetch("https://api.cohere.ai/v1/chat", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "command-r-plus",
      message: prompt,
      temperature: 0.6,
      max_tokens: 800, // ← más tokens para evitar cortes
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Error al llamar a Cohere: ${errorBody}`);
  }

  const data = await response.json();
  return data.text || "No se pudo generar una respuesta.";
};

module.exports = { callCohere };
