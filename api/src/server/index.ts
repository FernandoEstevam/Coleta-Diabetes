import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

// PORT
const port = 3333;


// Routes
import routes from '../routes';

// Middlware
import Middleware from '../middleware/Middleware';

const app = express();

//helmet
app.use(helmet());

// JSON
app.use(express.json());

// CORS
app.use(cors());

// Routes
app.use(routes);

// Middlware
app.use(Middleware.pageNotFound);
app.use(Middleware.erro);

// Listen
app.listen(port, () => console.log(`Server is running port ${port}`));