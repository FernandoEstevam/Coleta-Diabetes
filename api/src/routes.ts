import express from 'express';

const routes = express.Router();

// Controllers
import UserController from './controllers/UserController';


routes.get('/', (request, response) => {
  return response.status(200).json({
    version: "1.0.0",
    api: "Coleta de Diabetes e Pressão"
  });
});

routes.get('/users/:id', UserController.index);
routes.post('/users', UserController.create);

export default routes;