import User from "../../Domain/entities/User";
import Quote from "../../Domain/entities/Quote";
import ServiceOrder from "../../Domain/entities/ServiceOrder";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [User, Quote, ServiceOrder],
  subscribers: [],
  migrations: [],
})

export const DBConnect = async () => {
  await AppDataSource.initialize();
};