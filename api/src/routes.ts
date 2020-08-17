import express from 'express';

// Middlware
import Middleware from './middleware/Middleware';

const routes = express.Router();

// Controllers
import UserController from './controllers/UserController';
import TypesCollectionsController from './controllers/TypesCollectionsController';
import CollectController from './controllers/CollectController';
import AuthenticateController from './controllers/AuthenticateController';

routes.get('/', (request, response) => {
  return response.status(200).json({
    version: "1.0.0",
    api: "Coleta de Diabetes e Pressão"
  });
});

routes.post('/authenticate/login', AuthenticateController.login);
routes.get('/authenticate/logout', AuthenticateController.logout);

routes.use(Middleware.autheticate);

routes.get('/users', UserController.index);
routes.get('/users/id/:id', UserController.show);
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.get('/typesCollections', TypesCollectionsController.index);
routes.get('/typesCollections/id/:id', TypesCollectionsController.show);

routes.get('/collect', CollectController.index);
routes.get('/collect/id/:id', CollectController.show);
routes.post('/collect', CollectController.create);

export default routes;