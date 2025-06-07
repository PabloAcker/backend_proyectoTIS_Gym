const express = require('express');
const router = express.Router();
const dashboard = require('../controllers/dashboard.controller');

router.get('/subscriptions/monthly-count', dashboard.getMonthlySubscriptionCount);
router.get('/users/clients-subscription-status', dashboard.getClientsSubscriptionStatus);
router.get('/users/clients-subscription-by-month', dashboard.getClientsSubscriptionByMonth);
router.get('/memberships/distribution', dashboard.getMembershipDistribution);
router.get('/subscriptions/monthly-earnings', dashboard.getMonthlyEarnings);

module.exports = router;
