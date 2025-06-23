const prisma = require('../prisma/client');

// ✅ Verifica si dos fechas son contiguas (igual o un día después)
const areDatesContiguous = (a, b) => {
  const endDate = new Date(a.end_date);
  const startDate = new Date(b.start_date);

  const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
  const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());

  const diffDays = (start - end) / (1000 * 60 * 60 * 24);

  return diffDays === 0 || diffDays === 1;
};

const getUserNotifications = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const { userId } = req.params;
  const userIdNumber = Number(userId);

  if (isNaN(userIdNumber)) {
    return res.status(400).json({ error: 'ID de usuario inválido' });
  }

  try {
    const subscriptions = await prisma.subscriptions.findMany({
      where: {
        user_id: userIdNumber,
        state: 'vencido'
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

    // -------- MENSUAL --------
    let monthlyStreak = 1;
    for (let i = 0; i < subscriptions.length - 1; i++) {
      const curr = subscriptions[i];
      const next = subscriptions[i + 1];

      if (
        curr.membership.duration.toLowerCase() === '1 mes' &&
        next.membership.duration.toLowerCase() === '1 mes' &&
        areDatesContiguous(curr, next)
      ) {
        monthlyStreak++;
        if (monthlyStreak === 3) {
          incentives.push({
            type: 'mensual',
            message: '🎉 ¡Has obtenido un 15% de descuento por usar 3 planes mensuales seguidos!',
            discount: 15
          });
          monthlyStreak = 0; // reiniciar para permitir nuevos ciclos
        }
      } else {
        monthlyStreak = 1;
      }
    }

    // -------- TRIMESTRAL --------
    let quarterlyStreak = 1;
    for (let i = 0; i < subscriptions.length - 1; i++) {
      const curr = subscriptions[i];
      const next = subscriptions[i + 1];

      if (
        curr.membership.duration.toLowerCase() === '3 meses' &&
        next.membership.duration.toLowerCase() === '3 meses' &&
        areDatesContiguous(curr, next)
      ) {
        quarterlyStreak++;
        if (quarterlyStreak === 2) {
          incentives.push({
            type: 'trimestral',
            message: '🎉 ¡Has obtenido un 20% de descuento por usar 2 planes trimestrales seguidos!',
            discount: 20
          });
          quarterlyStreak = 0;
        }
      } else {
        quarterlyStreak = 1;
      }
    }

    // -------- ANUAL --------
    const hasVencidaAnual = subscriptions.find(
      (sub) => sub.membership.duration.toLowerCase() === '12 meses'
    );

    if (hasVencidaAnual) {
      incentives.push({
        type: 'anual',
        message: '🎉 ¡Por haber adquirido un plan anual, obtienes 25% de descuento en tu próxima suscripción!',
        discount: 25
      });
    }

    return res.json(incentives);
  } catch (error) {
    console.error("❌ Error en incentivos:", error);
    res.status(500).json({ error: "Error interno al generar notificaciones" });
  }
};

module.exports = { getUserNotifications };
