const {Router} = require('express');

const authRoutes = require('./auth');

const appRoutes = Router();

appRoutes
  .use(authRoutes);

module.exports = appRoutes;
