import conectar from "./conexao.js";
import PacoteViagem from "../Model/pacoteViagem.js";
export default class PacoteViagemDB {
  constructor() {
    this.init();
  }

  async init() {
    try {
      const conexao = await conectar();
      const sql = `CREATE TABLE IF NOT EXISTS pacoteViagem (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
        destino VARCHAR(100) NOT NULL, 
        descricao VARCHAR(100) NOT NULL,
        incluso VARCHAR(100) NOT NULL,
        duracao VARCHAR(100) NOT NULL,
        localdePartida VARCHAR(100) NOT NULL,
        localdeDestino VARCHAR(100) NOT NULL,
        preco VARCHAR (100) NOT NULL,
        qtdlugares VARCHAR(100) NOT NULL,      
      )`;
      await conexao.execute(sql);
    } catch (erro) {
      console.log("Erro ao iniciar a tabela pacoteViagem:" + erro);
    }
  }

  async gravar(pacoteViagem){
    if (pacoteViagem instanceof PacoteViagem){
      const conexao = await conectar();
      const sql = `INSERT INTO pacoteViagem (id, destino, descricao, incluso, duracao, localdePartida, localdeDestino, preco, qtdlugares)
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const parametros = [
        pacoteViagem.id,
        pacoteViagem.destino,
        pacoteViagem.descricao,
        pacoteViagem.incluso,
        pacoteViagem.duracao,
        pacoteViagem.localdePartida,
        pacoteViagem.localdeDestino,
        pacoteViagem.preco,
        pacoteViagem.qtdlugares,
      ];
      await conexao.execute(sql,parametros);
      await conexao.release();
    }
  }
  async atualizar(pacoteViagem){
    if (pacoteViagem instanceof PacoteViagem) {
      const conexao = await conectar();
      const sql = `UPDATE pacoteViagem SET WHERE id = ? destino = ?, descricao = ?, incluso = ?, duracao = ?, localdaPartida = ?, localdeDestino = ?, preco = ?, qtdlugares = ?`;
      const parametros = [
        pacoteViagem.id,
        pacoteViagem.destino,
        pacoteViagem.descricao,
        pacoteViagem.incluso,
        pacoteViagem.duracao,
        pacoteViagem.localdePartida,
        pacoteViagem.localdeDestino,
        pacoteViagem.preco,
        pacoteViagem.qtdlugares
      ]
    }
  }
  async excluir(pacoteViagem){}
  async consultar(pacoteViagem){}
}
