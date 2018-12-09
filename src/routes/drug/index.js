const {Router} = require('express');
const handlers = require('./handlers');
const {authMiddleWare} = require('../../auth');

const routes = Router();

// TODO: maybe implement roles for admin & user

routes.get('/drugs', authMiddleWare, handlers.getDrugs);

routes.get('/drugs/:id', authMiddleWare, handlers.getDrugById);

routes.post('/drugs', authMiddleWare, handlers.createDrug);

routes.put('/drugs/:id', authMiddleWare, handlers.updateDrug);

routes.delete('/drugs/:id', authMiddleWare, handlers.deleteDrug);

module.exports = routes;
