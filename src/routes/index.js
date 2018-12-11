const {Router} = require('express');

const authRoutes = require('./auth');
const userRoutes = require('./user');
const drugRoutes = require('./drug');
const categoryRoutes = require('./category');
const orderRoutes = require('./order');

const appRoutes = Router();

appRoutes
  .use(authRoutes)
  .use(userRoutes)
  .use(drugRoutes)
  .use(orderRoutes)
  .use(categoryRoutes);


module.exports = appRoutes;
