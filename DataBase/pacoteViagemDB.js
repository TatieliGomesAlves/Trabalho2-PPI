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
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        destino VARCHAR(100) NOT NULL, 
        descricao VARCHAR(100) NOT NULL,
        incluso VARCHAR(100) NOT NULL,
        duracao VARCHAR(100) NOT NULL,
        localdePartida VARCHAR(100) NOT NULL,
        localdeDestino VARCHAR(100) NOT NULL,
        preco VARCHAR (100) NOT NULL,
        qtdlugares VARCHAR(100) NOT NULL      
        )`;
      await conexao.execute(sql);
    } catch (erro) {
      console.log("Erro ao iniciar a tabela pacoteViagem:" + erro);
    }
  }

  async gravar(pacoteViagem){
    if (pacoteViagem instanceof PacoteViagem){
      const conexao = await conectar();
      const sql = `INSERT INTO pacoteViagem (destino, descricao, incluso, duracao, localdePartida, localdeDestino, preco, qtdlugares)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        const parametros = [
        pacoteViagem.destino,
        pacoteViagem.descricao,
        pacoteViagem.incluso,
        pacoteViagem.duracao,
        pacoteViagem.localdePartida,
        pacoteViagem.localdeDestino,
        pacoteViagem.preco,
        pacoteViagem.qtdlugares
      ];
      await conexao.execute(sql, parametros);
      await conexao.release();
    }
  }

  async atualizar(pacoteViagem){
    if (pacoteViagem instanceof PacoteViagem) {
      const conexao = await conectar();
      const sql = `UPDATE pacoteViagem SET preco = 8.000 WHERE destino = "Londres"`;
      const parametros = [pacoteViagem.preco];
      await conexao.execute(sql,parametros);
      await conexao.release();
    }
  }

  async excluir(pacoteViagem) {
    if (pacoteViagem instanceof PacoteViagem){
      const conexao = await conectar();
      const sql = `DELETE FROM pacoteViagem WHERE destino = 'Londres'`;
      const parametros = [pacoteViagem.id];
      await conexao.execute(sql,parametros);
      await conexao.release();
    }

  }

  async consultar(pacoteViagem){
    if (pacoteViagem instanceof PacoteViagem){
    const conexao = await conectar();
    const sql = `SELECT * FROM pacoteViagem ORDER BY destino`;
    const [registros, campos] = await conexao.execute(sql);
    await conexao.release();
    let listaPacoteViagem = [];
    for (const registro of registros) {
          const pacoteViagem = new PacoteViagem(registro.id,
                                                registro.destino,
                                                registro.descricao,
                                                registro.incluso,
                                                registro.duracao,
                                                registro.localdePartida,
                                                registro.localdeDestino,
                                                registro.preco,
                                                registro.qtdlugares
                                                );

          listaPacoteViagem.push(pacoteViagem);
    }
    return listaPacoteViagem;
  }
  }
}
