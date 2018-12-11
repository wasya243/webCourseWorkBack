const {Router} = require('express');
const handlers = require('./handlers');
const {authMiddleWare} = require('../../auth');

const routes = Router();

// TODO: maybe implement roles for admin & user

routes.get('/users', authMiddleWare, handlers.getUsers);

routes.get('/users/:id', authMiddleWare, handlers.getUserById);

routes.post('/users', authMiddleWare, handlers.createUser);

routes.put('/users/:id', authMiddleWare, handlers.updateUser);

routes.delete('/users/:id', authMiddleWare, handlers.deleteUser);

routes.get('/users/:id/orders', authMiddleWare, handlers.getOrdersByUser);

module.exports = routes;
