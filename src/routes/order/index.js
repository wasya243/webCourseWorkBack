const {Router} = require('express');
const handlers = require('./handlers');
const {authMiddleWare} = require('../../auth');

const routes = Router();

routes.post('/orders', authMiddleWare, handlers.createOrder);

module.exports = routes;
