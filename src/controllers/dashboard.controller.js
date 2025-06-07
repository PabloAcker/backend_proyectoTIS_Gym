const prisma = require('../prisma/client');

// 1. GET /dashboard/subscriptions/monthly-count
const getMonthlySubscriptionCount = async (req, res) => {
  try {
    const subscriptions = await prisma.subscriptions.findMany({
      where: { state: 'aprobado' },
      select: { start_date: true }
    });

    const counts = {};

    subscriptions.forEach(sub => {
      const month = sub.start_date.toLocaleString('es-BO', { month: 'short' });
      counts[month] = (counts[month] || 0) + 1;
    });

    const result = Object.entries(counts).map(([month, count]) => ({ month, count }));
    res.json(result);
  } catch (error) {
    console.error("Error en monthly-count:", error);
    res.status(500).json({ error: "Error al contar suscripciones por mes" });
  }
};

// 2. GET /dashboard/users/clients-subscription-status
const getClientsSubscriptionStatus = async (req, res) => {
  try {
    const clients = await prisma.clients.findMany({
      include: {
        user: {
          include: {
            subscriptions: {
              where: { state: 'aprobado' }
            }
          }
        }
      }
    });

    let withSubscription = 0;
    let withoutSubscription = 0;

    clients.forEach(c => {
      if (c.user?.subscriptions?.length > 0) {
        withSubscription++;
      } else {
        withoutSubscription++;
      }
    });

    res.json({ withSubscription, withoutSubscription });
  } catch (error) {
    console.error("Error en clients-subscription-status:", error);
    res.status(500).json({ error: "Error al contar clientes" });
  }
};

// 3. GET /dashboard/users/clients-subscription-by-month
const getClientsSubscriptionByMonth = async (req, res) => {
  try {
    const subscriptions = await prisma.subscriptions.findMany({
      where: { state: 'aprobado' },
      select: {
        user_id: true,
        start_date: true
      }
    });

    const months = {};

    subscriptions.forEach(sub => {
      const month = sub.start_date.toLocaleString('es-BO', { month: 'short' });
      if (!months[month]) months[month] = { with: new Set(), without: new Set() };
      months[month].with.add(sub.user_id);
    });

    const allClients = await prisma.clients.findMany({ select: { user_id: true } });

    allClients.forEach(client => {
      Object.keys(months).forEach(month => {
        if (!months[month].with.has(client.user_id)) {
          months[month].without.add(client.user_id);
        }
      });
    });

    const result = Object.entries(months).map(([month, data]) => ({
      month,
      with: data.with.size,
      without: data.without.size
    }));

    res.json(result);
  } catch (error) {
    console.error("Error en clients-subscription-by-month:", error);
    res.status(500).json({ error: "Error al agrupar clientes por mes" });
  }
};

// 4. GET /dashboard/memberships/distribution
const getMembershipDistribution = async (req, res) => {
  try {
    const subs = await prisma.subscriptions.findMany({
      where: { state: 'aprobado' },
      include: { membership: true }
    });

    const counts = {};

    subs.forEach(sub => {
      const name = sub.membership?.name || 'Desconocido';
      counts[name] = (counts[name] || 0) + 1;
    });

    const result = Object.entries(counts).map(([membership, count]) => ({
      membership,
      count
    }));

    res.json(result);
  } catch (error) {
    console.error("Error en memberships/distribution:", error);
    res.status(500).json({ error: "Error al agrupar membresías" });
  }
};

// 5. GET /dashboard/subscriptions/monthly-earnings
const getMonthlyEarnings = async (req, res) => {
  try {
    const subs = await prisma.subscriptions.findMany({
      where: { state: 'aprobado' },
      include: { membership: true }
    });

    const earnings = {};

    subs.forEach(sub => {
      const month = sub.start_date.toLocaleString('es-BO', { month: 'short' });
      const price = sub.membership?.price || 0;
      earnings[month] = (earnings[month] || 0) + price;
    });

    const result = Object.entries(earnings).map(([month, total]) => ({
      month,
      total
    }));

    res.json(result);
  } catch (error) {
    console.error("Error en monthly-earnings:", error);
    res.status(500).json({ error: "Error al calcular ganancias" });
  }
};

module.exports = {
  getMonthlySubscriptionCount,
  getClientsSubscriptionStatus,
  getClientsSubscriptionByMonth,
  getMembershipDistribution,
  getMonthlyEarnings
};
