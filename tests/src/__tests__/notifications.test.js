// tests/src/__tests__/notifications.test.js
const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
const today = new Date();

function calcularNotificaciones(subscriptions) {
  const notificaciones = [];

  const vencidas = subscriptions
    .filter(s => s.state === 'vencido')
    .sort((a, b) => new Date(a.start_date) - new Date(b.start_date));

  const duraciones = vencidas.map(s => s.membership?.duration);

  // Incentivo mensual: 3 planes mensuales seguidos
  const mensual = duraciones.slice(-3);
  if (mensual.length === 3 && mensual.every(d => d === '1 mes')) {
    notificaciones.push({ type: 'mensual', discount: 15 });
  }

  // Incentivo trimestral: 2 planes trimestrales seguidos
  const trimestral = duraciones.slice(-2);
  if (trimestral.length === 2 && trimestral.every(d => d === '3 meses')) {
    notificaciones.push({ type: 'trimestral', discount: 20 });
  }

  // Incentivo anual: 1 plan anual vencido
  if (duraciones.some(d => d === '12 meses')) {
    notificaciones.push({ type: 'anual', discount: 25 });
  }

  return notificaciones;
}

describe('🔔 Incentivos de Notificaciones', () => {
  const user_id = 1;

  it('✅ Retorna incentivo mensual por 3 mensuales vencidos', () => {
    const subs = [
      {
        user_id,
        state: 'vencido',
        start_date: addDays(today, -90),
        end_date: addDays(today, -60),
        membership: { duration: '1 mes' },
      },
      {
        user_id,
        state: 'vencido',
        start_date: addDays(today, -60),
        end_date: addDays(today, -30),
        membership: { duration: '1 mes' },
      },
      {
        user_id,
        state: 'vencido',
        start_date: addDays(today, -30),
        end_date: today,
        membership: { duration: '1 mes' },
      },
    ];

    const result = calcularNotificaciones(subs);
    expect(result).toContainEqual({ type: 'mensual', discount: 15 });
  });

  it('✅ Retorna incentivo trimestral por 2 trimestrales vencidos', () => {
    const subs = [
      {
        user_id,
        state: 'vencido',
        start_date: addDays(today, -180),
        end_date: addDays(today, -90),
        membership: { duration: '3 meses' },
      },
      {
        user_id,
        state: 'vencido',
        start_date: addDays(today, -90),
        end_date: today,
        membership: { duration: '3 meses' },
      },
    ];

    const result = calcularNotificaciones(subs);
    expect(result).toContainEqual({ type: 'trimestral', discount: 20 });
  });

  it('✅ Retorna incentivo anual por un plan anual vencido', () => {
    const subs = [
      {
        user_id,
        state: 'vencido',
        start_date: addDays(today, -365),
        end_date: today,
        membership: { duration: '12 meses' },
      },
    ];

    const result = calcularNotificaciones(subs);
    expect(result).toContainEqual({ type: 'anual', discount: 25 });
  });

  it('🚫 No retorna incentivos si no cumple condiciones', () => {
    const subs = [
      {
        user_id,
        state: 'activo',
        start_date: addDays(today, -30),
        end_date: addDays(today, 30),
        membership: { duration: '1 mes' },
      },
    ];

    const result = calcularNotificaciones(subs);
    expect(result).toEqual([]);
  });

  it('🚫 No retorna nada si no hay suscripciones', () => {
    const result = calcularNotificaciones([]);
    expect(result).toEqual([]);
  });
});
