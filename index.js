import PacoteViagem from "./Model/pacoteViagem.js";

var pacoteViagem = new PacoteViagem("Londres", 
                                    "A mais bela cidade de Londres",
                                    "Hospedagem, café da manha, guia turistico, passagens aereas, translado ida e volta",
                                    "5 dias",
                                    "GRU",
                                    "LHR",
                                    "5.500",
                                    "05");
                                    

pacoteViagem.gravar().then(()=> {
    console.log("Pacote de viagem gravado com sucesso!");
}).catch((erro) => {
    console.log("Erro ao gravar o pacote de viagem: " + erro);
});


pacoteViagem.consultar().then((listaPacoteViagem) => {
    for (const pacoteViagem of listaPacoteViagem){
      console.log(pacoteViagem.toJSON());
    }
});

pacoteViagem.atualizar().then(() => {
  console.log("Pacote de viagem atualizado com sucesso!");
}).catch((erro) => {
  console.log("Erro ao atualizar o pacote de viagem: " + erro);
});

pacoteViagem.excluir().then(() => {
  console.log("Pacote de viagem excluído com sucesso!");
}).catch((erro) => {
  console.log("Erro ao excluir o pacote de viagem: " + erro);
});


pacoteViagem.destino = "Londres"

console.log(pacoteViagem.toJSON());
console.log("O destino desse pacote de viagem é: " + pacoteViagem.destino);


pacoteViagem.descricao = "A mais bela cidade de Londres"

console.log(pacoteViagem.toJSON());
console.log("A descrição da cidade: " + pacoteViagem.descricao);


pacoteViagem.incluso = "Hospedagem, café da manha, guia turístico, passagens aereas, translado ida e volta"

console.log(pacoteViagem.toJSON());
console.log("Incluso no pacote de viagem: " + pacoteViagem.incluso);


pacoteViagem.duracao = "5 dias"

console.log(pacoteViagem.toJSON());
console.log("A viagem tem a duração de: " + pacoteViagem.duracao);


pacoteViagem.localdePartida = "GRU"

console.log(pacoteViagem.toJSON());
console.log("O voo sairá de: " + pacoteViagem.localdePartida);


pacoteViagem.localdeDestino = "LHR"

console.log(pacoteViagem.toJSON());
console.log("O voo chegará em: " + pacoteViagem.localdeDestino);


pacoteViagem.preco = "5.500"

console.log(pacoteViagem.toJSON());
console.log("O valor por viajante é: " + pacoteViagem.preco);


pacoteViagem.qtdlugares = "5"

console.log(pacoteViagem.toJSON());
console.log("A quantidade de lugares são: " + pacoteViagem.qtdlugares);


