import express from 'express';
import cors from 'cors';

// Routes
import routes from '../routes';

// Middlware
import Middleware from '../middleware/Middleware';

const app = express();

// JSON
app.use(express.json());

// CORS
app.use(cors());

// Routes
app.use(routes);

// Middlware
app.use(Middleware.erro);
app.use(Middleware.pageNotFound);



// Listen
app.listen(3333);
console.log('Api rodando na porta 3333');