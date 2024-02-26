import NaoEncontrado from "../erros/NaoEncontrado.js";
import { autor } from "../models/Autor.js";

class AutorController {
  static async listaAutores(req, res, next) {
    try {
      const result = await autor.find({});
      res.status(200).json(result);
    } catch (erro) {
      next(erro);
    }
  }

  static async listaAutorPorId(req, res, next) {
    try {
      const id = req.params.id;
      const result = await autor.findById(id);

      if (result !== null) {
        res.status(200).json(result);
      } else {
        next(new NaoEncontrado("ID do autor não achado na requisição"));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async cadstrarAutor(req, res, next) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({
        message: "criado com sucesso",
        autor: novoAutor,
      });
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarAutor(req, res, next) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "autor atualizado" });
    } catch (erro) {
      next(erro);
    }
  }

  static async excluirAutor(req, res, next) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "autor excluido" });
    } catch (erro) {
      next(erro);
    }
  }
}

export default AutorController;
