import PacoteViagem from "../Model/pacoteViagem.js";

export default class PacoteViagemCtrl{

  gravar(requisicao, resposta) {
      if (requisicao.method === 'POST' && requisicao.is("application/json")){
        const dados = requisicao.body;
        const id = dados.id;
        const destino = dados.destino;
        const descricao = dados.descricao;
        const incluso = dados.incluso;
        const duracao = dados.duracao;
        const localdePartida = dados.localdePartida;
        const localdeDestino = dados.localdeDestino;
        const preco = dados.preco;
        const qtdlugares = dados.qtdlugares;

        if (id && destino && descricao && incluso && duracao && localdePartida && localdeDestino && preco && qtdlugares ){
          const pacoteViagem = new PacoteViagem(id, destino, descricao, incluso, duracao, localdePartida, localdeDestino, preco, qtdlugares);
          pacoteViagem.gravar().then(() => {
            resposta.status(201).json(
              {
                status: true, 
                mensagem: "Pacote de viagem gravado com sucesso!"
              }
            );
          }).catch((erro) => {
            resposta.status(500).json({
              "status": false,
              "mensagem": "Erro ao gravar o pacote de viagem: " + erro
            });
          });
        } 
        else {
          resposta.status(400).json(
            {
              "status": false,
              "mensagem": "Todos os campos devem ser informados"
            }
          );
        }
      }
      else {
        resposta.status(400).json({
          "status": false,
          "mensagem": "Requisição inválida"
        });
      }
  }

  atualizar(requisicao, resposta) {
    if((requisicao.method === 'PUT' || requisicao.method === 'PATCH') && requisicao.is("application/json")){
      const dados = requisicao.body;
        const id = dados.id;
        const destino = dados.destino;
        const descricao = dados.descricao;
        const incluso = dados.incluso;
        const duracao = dados.duracao;
        const localdePartida = dados.localdePartida;
        const localdeDestino = dados.localdeDestino;
        const preco = dados.preco;
        const qtdlugares = dados.qtdlugares;

        if (id && destino && descricao && incluso && duracao && localdePartida && localdeDestino && preco && qtdlugares) {
          const pacoteViagem = new PacoteViagem(id, destino, descricao, incluso, duracao, localdePartida, localdeDestino, preco, qtdlugares);
          pacoteViagem.atualizar().then(() => {
            resposta.status(200).json(
              {
                "status": true,
                "mensagem": "Pacote de viagem atualizado com sucesso!"
              }
            );
          }).catch((erro) => {
            resposta.status(500).json({
              "status": false,
              "mensagem": "Erro ao atualizar o pacote de viagem: " + erro
            });
          });

        }
        else{
          resposta.status(400).json(
            {
              "status": false,
              "mensagem": "Todos os campos devem ser informados"
            }
          );
        }
    }

    else {
      resposta.status(400).json({
        "status": false,
        "mensagem": "Requisição inválida"
      });
    }
  }

  excluir(requisicao, resposta) {
    if(requisicao.method === 'DELETE' && requisicao.is("application/json")){
      const dados = requisicao.body;
      const destino = dados.destino;
      if (destino){
        const pacoteViagem = new PacoteViagem(destino);
        pacoteViagem.excluir().then(() => {
          resposta.status(200).json(
            {
              "status": true,
              "mensagem": "Pacote de viagem excluído com sucesso!"
            }
          );
        }).catch((erro) => {
          resposta.status(500).json({
            "status": false,
            "mensagem": "Erro ao excluir o pacote de viagem: " + erro
          });
        });
      }
      else{
        resposta.status(400).json(
          {
            "status": false,
            "mensagem": "Informe o destino do pacote de viagem a ser excluído!"
          }
        );
      }
    }
    else {
      resposta.status(400).json({
        "status": false,
        "mensagem": "Requisição inválida"
      });
    }
  }

  consultar(requisicao, resposta){
    if (requisicao.method === 'GET'){
      const pacoteViagem = new PacoteViagem();

      if (requisicao.params.destino){
          pacoteViagem.consultarPorDestino(requisicao.params.destino).then((listaPacoteViagem) => {
            resposta.status(200).json(
              {
                "status": true,
                "pacote de viagem": listaPacoteViagem
              }
            );
          }).catch((erro) => {
            resposta.status(500).json({
              "status": false,
              "mensagem": "Erro ao consultar pacote de viagem: " + erro
            });
          });
      } else {
        pacoteViagem.consultar().then((listaPacoteViagem) => {
          resposta.status(200).json(
            {
              "status": true,
              "pacote de viagem": listaPacoteViagem
            }
          );
        }).catch((erro) => {
          resposta.status(500).json({
            "status": false,
            "mensagem": "Erro ao consultar pacote de viagem: " + erro
          });
        });
      }
    } else {
      resposta.status(400).json({
        "status": false,
        "mensagem": "Requisição inválida"
      });
    }
  }
}