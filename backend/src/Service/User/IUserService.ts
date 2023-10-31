import User from "../../Domain/entities/User";

export interface IUserService {
  createUser(user: User): Promise<User>;
  login(email: string, password: string): Promise<string>;
  find(userFilters: Partial<User>): Promise<User[]>;
}