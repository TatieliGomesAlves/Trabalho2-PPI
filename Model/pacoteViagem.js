import PacoteViagemDB from "../DataBase/pacoteViagemDB.js";
export default class PacoteViagem {

  #id;
  #destino;
  #descricao;
  #incluso;
  #duracao;
  #localdePartida;
  #localdeDestino;
  #preco;
  #qtdlugares;


  constructor(id, destino, descricao, incluso, duracao, localdePartida, localdeDestino, preco, qtdlugares) {

  this.#id = id;
  this.#destino = destino;
  this.#descricao = descricao;
  this.#incluso = incluso;
  this.#duracao = duracao;
  this.#localdePartida = localdePartida;
  this.#localdeDestino = localdeDestino;
  this.#preco = preco;
  this.#qtdlugares = qtdlugares;

  }

    get id() {
    return this.#id;
    }
    set id(novoID){
    this.#id = novoID;
    }

    get destino() {
      return this.#destino;
    }
    set destino(Destino) {
      this.#destino = Destino;
    }

    get descricao() {
      return this.#descricao;
    }
    set descricao(Descricao) {
      this.#descricao = Descricao;
    }

    get incluso() {
      return this.#incluso;
    }
    set incluso(Incluso){
      this.#incluso = Incluso;
    }

    get duracao(){
      return this.#duracao;
    }
    set duracao(Duracao){
      this.#duracao = Duracao;
    }

    get localdePartida(){
      return this.#localdePartida;
    }
    set localdePartida(LocalPartida){
      this.#localdePartida = LocalPartida;
    }

    get localdeDestino(){
      return this.#localdeDestino;
    }
    set localdeDestino(LocalDestino){
      this.#localdeDestino = LocalDestino;
    }

    get preco(){
      return this.#preco;
    }
    set preco(Preco){
      this.#preco = Preco;
    }

    get qtdlugares() {
      return this.#qtdlugares;
    }
    set qtdlugares(QtdLugares){
      this.#qtdlugares = QtdLugares;
    }

    toJSON() {
      return {
        "id": this.#id,
        "destino": this.#destino,
        "descricao": this.#descricao,
        "incluso": this.#incluso,
        "duracao": this.#duracao,
        "localdePartida": this.#localdePartida,
        "localdeDestino": this.#localdeDestino,
        "preco": this.#preco,
        "qtdlugares": this.#qtdlugares
      }
    }
    async gravar() {
      const pacoteDB = new PacoteViagemDB();
      pacoteDB.gravar(this);
    }

    async atualizar() {
      const pacoteDB = new PacoteViagemDB();
      pacoteDB.atualizar(this);
    }

    async excluir() {
      const pacoteDB = new PacoteViagemDB();
      pacoteDB.excluir(this);
    }

    async consultar() {
      const pacoteDB = new PacoteViagemDB();
      return await pacoteDB.consultar(this);
    }

    async consultarPorDestino(destino) {
      const pacoteDB = new PacoteViagemDB();
      return await pacoteDB.consultarPorDestino(destino);
    }
}