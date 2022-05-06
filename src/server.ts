import cors from "cors";
import express from "express";
import { routes } from "./routes";

//express -> criação das rotas
const app = express();

app.use(
  cors()
  // //segurança - liberar acesso
  // {
  //   origin: 'http://localhost:3000'
  // }
);
//converter para json
app.use(express.json());
//importando rotas
app.use(routes);

//colocar o server no ar na porta escolhida
app.listen(3333, () => {
  console.log("server running");
});
