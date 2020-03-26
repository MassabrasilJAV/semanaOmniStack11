const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
 
/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informacao no back-end
  * PUT: Alterar uma informacao no back-end
  * DELETE: Deletar uma informação no back-end
  */
/**
 * Tipos de parâmetros:
 * Query params: Parametros nomeados enviados na rota apos "?" (Filtros, paginacao)
 * Route params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisicao, utilizado para criar/alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, MSSQLServer
  * NoSQL: MongoDB, CouchDB, etc
  */
 /**
  * Driver: SELECT * FROM users;
  * Query Builder: table('users').select('*');
  */

app.listen(3333);
