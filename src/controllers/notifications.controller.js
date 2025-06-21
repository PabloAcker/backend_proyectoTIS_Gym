const prisma = require('../prisma/client');

// Función para verificar si dos fechas son contiguas (el end_date de una es igual al start_date de la siguiente)
const areDatesContiguous = (a, b) => {
  return new Date(a.end_date).toDateString() === new Date(b.start_date).toDateString();
};

// GET /notifications/:userId → Verificar incentivos por uso frecuente
const getUserNotifications = async (req, res) => {
  res.setHeader('Content-Type', 'application/json'); // Fuerza respuesta JSON

  const { userId } = req.params;
  const userIdNumber = Number(userId);

  if (isNaN(userIdNumber)) {
    return res.status(400).json({ error: 'ID de usuario inválido' });
  }

  try {
    const subscriptions = await prisma.subscriptions.findMany({
      where: {
        user_id: userIdNumber,
        state: 'aprobado'
      },
      include: {
        membership: true
      },
      orderBy: {
        start_date: 'asc'
      }
    });

    if (!subscriptions.length) {
      return res.json([]);
    }

    const incentives = [];
    let monthlyStreak = 1;
    let quarterlyStreak = 1;
    let hadAnnual = false;

    for (let i = 0; i < subscriptions.length - 1; i++) {
      const current = subscriptions[i];
      const next = subscriptions[i + 1];

      // Plan mensual
      if (
        current.membership.duration.toLowerCase() === "1 mes" &&
        next.membership.duration.toLowerCase() === "1 mes" &&
        areDatesContiguous(current, next)
        ) {
        monthlyStreak++;
      } else {
        monthlyStreak = 1;
      }

      if (monthlyStreak >= 3 && !incentives.some(i => i.type === 'mensual')) {
        incentives.push({
          type: "mensual",
          message: "🎉 ¡Has obtenido un 15% de descuento por usar 3 planes mensuales seguidos!",
          discount: 15
        });
      }

      // Plan trimestral
      if (
        current.membership.duration.toLowerCase() === "3 meses" &&
        next.membership.duration.toLowerCase() === "3 meses" &&
        areDatesContiguous(current, next)
        ) {
        quarterlyStreak++;
      } else {
        quarterlyStreak = 1;
      }

      if (quarterlyStreak >= 2 && !incentives.some(i => i.type === 'trimestral')) {
        incentives.push({
          type: "trimestral",
          message: "🎉 ¡Has obtenido un 20% de descuento por usar 2 planes trimestrales seguidos!",
          discount: 20
        });
      }
    }

    // Plan anual (una vez basta)
    if (!hadAnnual) {
      const hadAnnualSubscription = subscriptions.some(
        sub => sub.membership.duration.toLowerCase() === "12 meses"
        );
      if (hadAnnualSubscription) {
        incentives.push({
          type: "anual",
          message: "🎉 ¡Por haber adquirido un plan anual, obtienes 25% de descuento en tu próxima suscripción!",
          discount: 25
        });
        hadAnnual = true;
      }
    }

    res.json(incentives);
  } catch (error) {
    console.error("❌ Error en incentivos:", error);
    res.status(500).json({ error: "Error interno al generar notificaciones" });
  }
};

module.exports = { getUserNotifications };
