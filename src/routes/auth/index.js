const {Router} = require('express');
const handlers = require('./handlers');
const {authMiddleware} = require('../../auth');

const routes = Router();

routes.post('/auth/sign-in', handlers.signIn);

routes.post('/auth/sign-out', authMiddleware, handlers.signOut);