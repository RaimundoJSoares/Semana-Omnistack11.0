const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json()); //falando pro express ir no corpo da requisição converter meu json em javascript
app.use(routes);

/**
 * Rota/recurso
 */

 /**
  * Método HTTP:
  * 
  * GET : Usamos para buscar/listar uma informação back-end (o browser sempre executa o modo GET)
  * Post: Criar uma informação no back-end
  * PUT : alterar uma informação no back-end
  * DELETE : deletar uma informação no back-end
  */

/**
 * Tipos de parâmetros: 
 * 
 * Query params: São parametros nomeados enviados na rota após o "?"(servem pra filtros e paginação)
 * Route Params :parâmetros utilizaos para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * Drivers:  SELECT * FROM users
  * Query builder : Table('users').select('*').where()
  */


app.listen(3333);
 