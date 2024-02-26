import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {
  static async listaLivros(req, res, next) {
    try {
      const result = await livro.find({});
      res.status(200).json(result);
    } catch (erro) {
      next(erro);
    }
  }

  static async listaLivroPorId(req, res, next) {
    try {
      const id = req.params.id;
      const result = await livro.findById(id);
      res.status(200).json(result);
    } catch (erro) {
      next(erro);
    }
  }

  static async cadastrarLivro(req, res, next) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = {  ...novoLivro, autor: { ...autorEncontrado }};
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({
        message: "criado com sucesso",
        livro: livroCriado,
      });
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarLivro(req, res, next) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "livro atualizado"});
    } catch (erro) {
      next(erro);
    }
  }

  static async excluirLivro(req, res, next) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({message: "livro excluido"});
    } catch (erro) {
      next(erro);
    }
  }

  static async listarLivrosPorEditora(req, res) {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await livro.find({editora});
      res.status(200).json(livrosPorEditora);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} falha na busca`});
    }   
  }

}

export default LivroController;
