import express from "express";
import connectDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const db = await connectDataBase();

db.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express();
routes(app);

export default app;
