const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Importar rutas
const userRoutes = require('./routes/user.routes');

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API del Gimnasio funcionando 🏋️‍♂️');
});

// Usar rutas de usuarios
app.use('/users', userRoutes);

//clients
const clientRoutes = require('./routes/client.routes');
app.use('/clients', clientRoutes);

//memberships
const membershipRoutes = require('./routes/membership.routes');
app.use('/memberships', membershipRoutes);

// subscriptions
const subscriptionRoutes = require('./routes/subscription.routes');
app.use(express.json());
app.use('/subscriptions', subscriptionRoutes);

// auth
const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

// qrs
const qrRoutes = require('./routes/qr.routes');
app.use('/qrs', qrRoutes);

// branches
const branchRoutes = require('./routes/branch.routes');
app.use('/branches', branchRoutes);

// dashboard
const dashboardRoutes = require('./routes/dashboard.routes');
app.use('/dashboard', dashboardRoutes);

// RFID access
const accessRoutes = require('./routes/access.routes');
app.use('/access', accessRoutes);

const rfidLogRoutes = require('./routes/rfidLog.routes');
app.use('/rfid-logs', rfidLogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
