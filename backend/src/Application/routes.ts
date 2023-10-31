import UserControllerFactory from "../Factories/UserControllerFactory";
import { Router } from "express";
import validateJwtMiddleware from "./Middleware/validateJwtMiddleware";
import ServiceOrderControllerFactory from "../Factories/ServiceOrderControllerFactory ";

const UserController = UserControllerFactory.make();
const ServiceOrderController = ServiceOrderControllerFactory.make();

const router = Router();

(async () => {
  router.get('/', (req, res) => res.status(200).send('ok'));
  router.get('/user', (req, res, next) => validateJwtMiddleware(req, res, next, ['client']), UserController.listUser);
  router.post('/user', UserController.createUser);
  router.post('/login', UserController.login);

  router.post('/serviceOrder', (req, res, next) => validateJwtMiddleware(req, res, next, ['client']), ServiceOrderController.createServiceOrder);
})();

export default router;