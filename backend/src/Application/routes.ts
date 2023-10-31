import UserControllerFactory from "../Factories/UserControllerFactory";
import { Router } from "express";
import validateJwtMiddleware from "./Middleware/validateJwtMiddleware";

const UserController = UserControllerFactory.make();

const router = Router();

(async () => {
  router.get('/', (req, res) => res.status(200).send('ok'));
  router.get('/user', (req, res, next) => validateJwtMiddleware(req, res, next, ['client']), UserController.listUser);
  router.post('/user', UserController.createUser);
  router.post('/login', UserController.login);
})();

export default router;