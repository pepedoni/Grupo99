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

      response.status(201).json({ user });
    } catch (error: any) {
      response.status(400).json({ error: error.message });
    }
  };

  login: RequestHandler = async (request, response) => {
    try {
      const { email, password } = request.body;
      const jwt = await this.userService.login(email, password);

      response.status(200).json({ jwt });
    } catch (error: any) {
      response.status(400).json({ error: error.message });
    }
  };

}