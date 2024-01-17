import express from "express";
import AutorController from "../controllers/autorController.js";

const routes =  express.Router();

routes.get("/autor", AutorController.listaAutores);
routes.get("/autor/:id", AutorController.listaAutorPorId);
routes.post("/autor", AutorController.cadstrarAutor);
routes.put("/autor/:id", AutorController.atualizarAutor);
routes.delete("/autor/:id", AutorController.excluirAutor);

export default routes;
