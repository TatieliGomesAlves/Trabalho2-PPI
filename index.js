import express from "express";
import rotaPacoteViagem from "./Routes/rotaPacoteViagem.js";
import autenticar from "./seguranca/autenticar.js";
import session from "express-session";

const host = '0.0.0.0';
const porta = 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(
   session({
     secret: "m1Nh4Ch4v3S3cR3t4",
     resave: false,
     saveUninitialized: false,
     cookie: {
       maxAge: 1000 * 60 * 15,
     },
   })
 );

app.use("/pacoteViagem", rotaPacoteViagem);

app.get("/login", (requisicao, resposta) => {
   resposta.redirect("/login.html");
 });
 
 app.post("/login", (requisicao, resposta) => {
   const usuario = requisicao.body.usuario;
   const senha = requisicao.body.senha;
   if (usuario === "admin" && senha === "admin") {
     requisicao.session.autenticado = true;
     resposta.redirect("/pacotes.html");
   } else {
     resposta.redirect("/login.html");
   }
 });
 
 app.use(express.static("./publico"));
 
 app.use(autenticar, express.static("./privado"));
 
app.listen(porta, host, () => {
   console.log("Servidor backend em execução: http://" + host + ":" + porta);
});






















// import PacoteViagem from "./Model/pacoteViagem.js";

// var pacoteViagem = new PacoteViagem("Londres", 
//                                     "A mais bela cidade de Londres",
//                                     "Hospedagem, café da manha, guia turistico, passagens aereas, translado ida e volta",
//                                     "5 dias",
//                                     "GRU",
//                                     "LHR",
//                                     "5.500",
//                                     "05");
                                    
// pacoteViagem.gravar().then(()=> {
//     console.log("Pacote de viagem gravado com sucesso!");
// }).catch((erro) => {
//     console.log("Erro ao gravar o pacote de viagem: " + erro);
// });


// pacoteViagem.consultar().then((listaPacoteViagem) => {
//     for (const pacoteViagem of listaPacoteViagem){
//       console.log(pacoteViagem.toJSON());
//     }
// });

// pacoteViagem.atualizar().then(() => {
//   console.log("Pacote de viagem atualizado com sucesso!");
// }).catch((erro) => {
//   console.log("Erro ao atualizar o pacote de viagem: " + erro);
// });

// pacoteViagem.excluir().then(() => {
//   console.log("Pacote de viagem excluído com sucesso!");
// }).catch((erro) => {
//   console.log("Erro ao excluir o pacote de viagem: " + erro);
// });


// pacoteViagem.destino = "Londres"

// console.log(pacoteViagem.toJSON());
// console.log("O destino desse pacote de viagem é: " + pacoteViagem.destino);


// pacoteViagem.descricao = "A mais bela cidade de Londres"

// console.log(pacoteViagem.toJSON());
// console.log("A descrição da cidade: " + pacoteViagem.descricao);


// pacoteViagem.incluso = "Hospedagem, café da manha, guia turístico, passagens aereas, translado ida e volta"

// console.log(pacoteViagem.toJSON());
// console.log("Incluso no pacote de viagem: " + pacoteViagem.incluso);


// pacoteViagem.duracao = "5 dias"

// console.log(pacoteViagem.toJSON());
// console.log("A viagem tem a duração de: " + pacoteViagem.duracao);


// pacoteViagem.localdePartida = "GRU"

// console.log(pacoteViagem.toJSON());
// console.log("O voo sairá de: " + pacoteViagem.localdePartida);


// pacoteViagem.localdeDestino = "LHR"

// console.log(pacoteViagem.toJSON());
// console.log("O voo chegará em: " + pacoteViagem.localdeDestino);


// pacoteViagem.preco = "5.500"

// console.log(pacoteViagem.toJSON());
// console.log("O valor por viajante é: " + pacoteViagem.preco);


// pacoteViagem.qtdlugares = "5"

// console.log(pacoteViagem.toJSON());
// console.log("A quantidade de lugares são: " + pacoteViagem.qtdlugares);
