 export default class PacoteViagem {

  #destino;
  #descricao;
  #incluso;
  #duracao;
  #localdePartida;
  #localdeDestino;
  #preco;
  #qtdlugares;
  #id;

constructor(destino, descricao, incluso, duracao, localdePartida, localdeDestino, preco, qtdlugares, id) {
  
  this.#destino = destino;
  this.#descricao = descricao;
  this.#incluso = incluso;
  this.#duracao = duracao;
  this.#localdePartida = localdePartida;
  this.#localdeDestino = localdeDestino;
  this.#preco = preco;
  this.#qtdlugares = qtdlugares;
  this.#id = id;

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

    get id() {
      return this.#id;
    }
    set id(novoID){
      this.#id = novoID;
    }


    toJSON(){
      return {
        "destino": this.#destino,
        "descricao": this.#descricao,
        "incluso": this.#incluso,
        "duracao": this.#duracao,
        "localdePartida": this.#localdePartida,
        "localdeDestino": this.#localdeDestino,
        "preco": this.#preco,
        "qtdlugares": this.#qtdlugares,
        "id": this.#id
      }
    }
 
}