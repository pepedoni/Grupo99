import User from "Domain/entities/User";
import { IUserService } from "./IUserService";
import { Repository } from "typeorm";

export default class UserService implements IUserService {
  private userRepository: Repository<User>;
  constructor(userRepository: Repository<User>) {
    this.userRepository = userRepository;
  }

  async createUser(user: User): Promise<User> {
    const createdUser = this.userRepository.create(user);
    await this.userRepository.save(createdUser);
    return createdUser;
  }
}