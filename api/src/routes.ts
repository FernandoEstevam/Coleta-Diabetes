import express from 'express';

const routes = express.Router();

// Controllers
import UserController from './controllers/UserController';
import TypesCollectionsController from './controllers/TypesCollectionsController';

routes.get('/', (request, response) => {
  return response.status(200).json({
    version: "1.0.0",
    api: "Coleta de Diabetes e Pressão"
  });
});

routes.get('/users', UserController.index);
routes.get('/users/id/:id', UserController.show);
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.get('/typesCollections', TypesCollectionsController.index);
routes.get('/typesCollections/id/:id', TypesCollectionsController.show);

export default routes;