const express = require('express');

const BuyerController = require('./controllers/BuyerController');
const ClientController = require('./controllers/ClientController');
const PaymentController = require('./controllers/PaymentController');

const routes = express.Router();

routes.post('/buyers', BuyerController.store);
routes.post('/clients', ClientController.store);

routes.post('/payments', PaymentController.store);
routes.get('/payments/:paymentid', PaymentController.show);
routes.patch('/payments/:paymentid', PaymentController.update);

module.exports = routes;