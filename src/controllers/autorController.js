import { autor } from "../models/Autor";

class AutorController {
  static async listaAutores(req, res) {
    try {
      const result = await autor.find({});
      res.status(200).json(result);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} falha na requisição`})
    }
  };

  static async listaAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const result = await autor.findById(id);
      res.status(200).json(result);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} falha na requisição do autor`});
    }
  };

  static async cadstrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({
        message: "criado com sucesso",
        autor: novoAutor,
      });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - falha ao cadastrar autor`,
      });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "autor atualizado"});
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} falha na atualização autor`});
    }
  };

  static async excluirAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({message: "autor excluido"});
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} falha na exclusão autor`});
    }
  };

}

export default AutorController;
