const {Router} = require('express');

const authRoutes = require('./auth');
const userRoutes = require('./user');

const appRoutes = Router();

appRoutes
  .use(authRoutes)
  .use(userRoutes);


module.exports = appRoutes;
