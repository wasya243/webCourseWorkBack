const {Router} = require('express');

const authRoutes = require('./auth');
const userRoutes = require('./user');
const drugRoutes = require('./drug');

const appRoutes = Router();

appRoutes
  .use(authRoutes)
  .use(userRoutes)
  .use(drugRoutes);


module.exports = appRoutes;
