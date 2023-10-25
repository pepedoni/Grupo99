import User from "../Domain/entities/User";
import UserService from "../Service/User/UserService";
import { AppDataSource } from "../infrastructure/persistence/Database";
import { Repository } from "typeorm";

export default class UserServiceFactory {
  static make(userRepository?: Repository<User>) {
    const userRepositoryInstance = userRepository || AppDataSource.getRepository(User);
    return new UserService(userRepositoryInstance);
  }
}