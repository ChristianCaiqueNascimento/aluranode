import ErroBase from "./ErroBase.js";

class NaoEncontrado extends ErroBase{
  constructor(mensagem = "ID do autor não achado na requisição"){
    super(mensagem, 404);
  }
}

export default NaoEncontrado;