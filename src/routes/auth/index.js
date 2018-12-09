const {Router} = require('express');
const handlers = require('./handlers');
const {authMiddleWare} = require('../../auth');

const routes = Router();

routes.post('/auth/sign-out', authMiddleWare, handlers.signOut);

routes.post('/auth/sign-up', handlers.signUp);

routes.post('/auth/sign-in', handlers.signIn);

module.exports = routes;
