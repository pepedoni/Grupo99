import User from "../Domain/entities/User";
import { IUserService } from "../Service/User/IUserService";
import { RequestHandler } from "express";

export default class UserController {
  private userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  createUser: RequestHandler = async (request, response) => {
    try {
      const user = await this.userService.createUser(request.body as User);

      return response.status(201).json(user);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  };

  login: RequestHandler = async (request, response) => {
    try {
      const { email, password } = request.body;
      const jwt = await this.userService.login(email, password);

      return response.status(200).json({ jwt });
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  };

  listUser: RequestHandler = async (request, response) => {
    try {
      const userFilters = request.query as Partial<User>;

      const users = await this.userService.find(userFilters);
      return response.status(200).json({ users });
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  };

}