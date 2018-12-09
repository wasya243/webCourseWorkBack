const {Router} = require('express');
const handlers = require('./handlers');
const {authMiddleWare} = require('../../auth');

const routes = Router();

// TODO: maybe implement roles for admin & user

routes.get('/categories', handlers.getCategories);

routes.get('/categories/:id', authMiddleWare, handlers.getCategoryById);

routes.post('/categories', authMiddleWare, handlers.createCategory);

routes.put('/categories/:id', authMiddleWare, handlers.updateCategory);

routes.delete('/categories/:id', authMiddleWare, handlers.deleteCategory);

routes.get('/categories/:id/drugs', authMiddleWare, handlers.getDrugsByCategoryId);

module.exports = routes;
