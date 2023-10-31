import UserControllerFactory from "../Factories/UserControllerFactory";
import { Router } from "express";

const UserController = UserControllerFactory.make();

const router = Router();

(async () => {
  router.get('/', (req, res) => res.status(200).send('ok'));
  router.post('/user', UserController.createUser);
  router.post('/login', UserController.login);
})();

export default router;