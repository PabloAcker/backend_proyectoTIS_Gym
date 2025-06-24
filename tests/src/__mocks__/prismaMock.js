// tests/src/__mocks__/prismaMock.js
const { v4: uuidv4 } = require('uuid');

let subscriptions = [];
let clients = [];
let mockSubscriptions = [];

module.exports = {
  users: {
    create: jest.fn(async ({ data }) => ({ ...data, id: uuidv4() })),
    delete: jest.fn(async ({ where }) => true),
  },
  memberships: {
    create: jest.fn(async ({ data }) => ({ ...data, id: uuidv4() })),
    delete: jest.fn(async ({ where }) => true),
  },
  subscriptions: {
    create: jest.fn(async ({ data }) => {
      const newSub = { ...data, id: uuidv4() };
      subscriptions.push(newSub);
      return newSub;
    }),
    deleteMany: jest.fn(async ({ where }) => {
      subscriptions = subscriptions.filter(sub => sub.user_id !== where.user_id);
      return true;
    }),
    findFirst: jest.fn(async ({ where }) => {
      return subscriptions.find(sub => sub.user_id === where.user_id && ['pendiente', 'aprobado'].includes(sub.state));
    }),
    findMany: jest.fn(async ({ where }) => {
      return mockSubscriptions.filter(sub =>
        sub.user_id === where.user_id &&
        sub.state === where.state
      ).sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
    }),
    __setData: (data) => {
      mockSubscriptions = [...data];
    },
    update: jest.fn(async ({ where, data }) => {
      const sub = subscriptions.find(sub => sub.id === where.id);
      if (sub) {
        Object.assign(sub, data);
        return sub;
      }
      return null;
    }),
  },
  clients: {
    deleteMany: jest.fn(async ({ where }) => {
      clients = clients.filter(c => c.user_id !== where.user_id);
      return true;
    }),
    findUnique: jest.fn(async ({ where }) => {
      return clients.find(c => c.user_id === where.user_id);
    }),
    create: jest.fn(async ({ data }) => {
      const client = { ...data, id: uuidv4() };
      clients.push(client);
      return client;
    }),
  },
  $disconnect: jest.fn(),
};
