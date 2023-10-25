import User from "../../Domain/entities/User";

export interface IUserService {
  createUser(user: User): Promise<User>;
}