const fetch = require("node-fetch");

const callCohere = async ({ tipo, peso, estatura, actividad, objetivo, edad }) => {
let prompt = "";

if (tipo === "dieta") {
  prompt = `
You are a licensed clinical nutritionist following modern international guidelines from the Academy of Nutrition and Dietetics and the FAO/WHO standards.

Generate a **personalized diet plan in Spanish** for a person with the following characteristics:
- Weight: ${peso}
- Height: ${estatura}
- Exercise days per week: ${actividad}
- Goal: ${objetivo}
- Age: ${edad}

Your response **must be written in Spanish**, using clear and educational language. Structure it as follows:

1. A brief and empathetic introduction based on the user's profile.
2. A complete daily meal plan with:
   - Breakfast
   - Lunch
   - Dinner
   - Two healthy snacks
3. Caloric and macronutrient considerations if possible.
4. Emphasize balance, food variety, and hydration.
5. Include a final note stating that this plan is general and always recommend consulting a certified nutritionist for long-term guidance.

Use realistic and accessible ingredients, based on traditional eating habits, local markets and common foods available in La Paz, Bolivia (e.g. quinua, papa, chuño, mote, queso fresco, lentejas, etc.).
`;
} else if (tipo === "rutina") {
  prompt = `
You are a certified strength and conditioning coach, trained under NSCA guidelines and drawing inspiration from "Strength Training Anatomy" by Frédéric Delavier.

Generate a **personalized training routine in Spanish** for a person with the following attributes:
- Weight: ${peso}
- Height: ${estatura}
- Exercise days per week: ${actividad}
- Goal: ${objetivo}
- Age: ${edad}

Your response **must be written in Spanish**, be professional yet motivational, and follow this structure:

1. Brief introduction based on user's characteristics and goals.
2. Weekly workout plan (from Monday to Sunday), specifying:
   - Type of exercise (strength, cardio, flexibility, etc.)
   - Number of sets, reps, rest time
   - Muscle groups per session
3. Safety recommendations and progressive overload strategy.
4. Final tip to maintain consistency and proper form.
5. Clarify that this is a general guide and consulting a fitness professional is ideal for form checks and injury prevention.

Make the routine adaptable to gym or home environments.
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
