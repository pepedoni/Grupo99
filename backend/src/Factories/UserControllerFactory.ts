import { IUserService } from "../Service/User/IUserService";
import UserServiceFactory from "./UserServiceFactory";
import UserController from "../Controller/UserController";

export default class UserControllerFactory {
  static make(userService?: IUserService) {
    const userServiceInstance = userService || UserServiceFactory.make();
    return new UserController(userServiceInstance);
  }
}