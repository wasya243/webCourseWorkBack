const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config({path: path.resolve(__dirname, '.env')});

const {PORT} = process.env;

const {errorHandlerMiddleWare} = require('./src/lib/middlewares');
const routes = require('./src/routes');
const db = require('./src/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/v1', routes);
app.use((req, res, next) => next({status: 404}));
app.use(errorHandlerMiddleWare);

db.connect()
  .then(() => app.listen(PORT, () => console.log(`Server is listening on ${PORT}`)));