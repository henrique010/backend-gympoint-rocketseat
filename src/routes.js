import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import Middleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(Middleware);
routes.post('/students', StudentController.store);
routes.put('/students', StudentController.update);

export default routes;
