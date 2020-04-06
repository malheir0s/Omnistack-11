const express = require('express');

const OngController = require('./controllers/OngController')
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', profileController.index);

routes.post('/session', sessionController.create);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;


 /*
Rota/Recurso

    Método HTTP:
    GET: Buscar uma informação no backend
    POST: Criar uma informação no backend
    PUT: Alterar uma informação no backend
    DELETE: deletar ...
**/
/** npm start
 * Tipos de Parâmetros
 * Query params: parametro nomeado enviado na rota apos o ? (Filtros, paginacao..)
 * Route params: parametro utilizado para identificar recursos
 * Request Body: Corpo de requisição, utilizado para criar ou alterar recursos
 *
 * 
 */

 /*
routes.post('/users', (request, response) => {
    // return response.send('Hello World');
    // const params = request.query; // teste: localhost:3333/users?name=Danilo&idade=25
    // const params = request.params; // teste: localhost:3333/users/1  ; o get é /users/:id
     const body = request.body;
     console.log(body);
 
     return response.json({
         evento: 'Semana Omnistack 11.0',
         aluno: 'Danilo Malheiros'
     });
 });
 */