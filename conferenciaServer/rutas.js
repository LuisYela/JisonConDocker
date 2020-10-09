const Express = require('express');
const Router = Express.Router();

// metodos get
const saludo = require('./saludo');

// metodos post
const analizar = require('./parser');

// router get
Router.get('/saludo', saludo);

// router post
Router.post('/analizar', analizar);


module.exports = Router;
