import router from "./Application/routes";
import express from "express";
import { DBConnect } from "./infrastructure/persistence/Database";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(router);

DBConnect().catch(err => {
  console.error(err);
  process.exit(1);
});

app.listen(process.env.PORT);
console.log(`aplicação rodando na porta ${process.env.PORT}`);