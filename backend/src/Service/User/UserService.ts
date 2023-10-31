import User from "Domain/entities/User";
import { IUserService } from "./IUserService";
import { Repository } from "typeorm";
import { comparePassword, createJWT, encryptPassword } from "../../Application/Utils";

export default class UserService implements IUserService {
  private userRepository: Repository<User>;
  constructor(userRepository: Repository<User>) {
    this.userRepository = userRepository;
  }

  public async createUser(user: User): Promise<User> {
    const encryptedPassWord = await encryptPassword(user.password);
    const createdUser = this.userRepository.create({ ...user, password: encryptedPassWord });
    await this.userRepository.save(createdUser);
    return createdUser;
  }

  public async login(email: string, password: string): Promise<string> {
    const user = await this.userRepository.findOneByOrFail({ email: email });
    const isValidPassword = await comparePassword(password, user.password);
    if (!isValidPassword)
      throw new Error("Senha inválida");
    return createJWT(user.id, user.type);
  }


}