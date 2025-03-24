const formCadPViagem = document.getElementById("formViagem");

const acao = "cadastrar";

function manipularEnvio(evento) {
  evento.preventDefault();
  evento.stopPropagation();

  if (!formCadPViagem.checkValidity()) {
    formCadPViagem.classList.add("was-validated");
  } else {
      if (acao == "cadastrar") {
        adicionarPacoteViagem();
        formCadPViagem.reset();
        formCadPViagem.classList.remove("was-validated");
      } else if (acao == "atualizar") {
        atualizarPacoteViagem();
        formCadPViagem.reset();
      } else if (acao == "excluir") {
        excluirPacoteViagem();
        formCadPViagem.reset();
      }
  }
}

function pegarDadosPacoteViagem() {
  const id = document.getElementById("id").value;
  const destino = document.getElementById("destino").value;
  const descricao = document.getElementById("descricao").value;
  const incluso = document.getElementById("incluso").value;
  const duracao = document.getElementById("duracao").value;
  const localdePartida = document.getElementById("localdePartida").value;
  const localdeDestino = document.getElementById("localdeDestino").value;
  const preco = document.getElementById("preco").value;
  const qtdlugares = document.getElementById("qtdlugares").value;

  return {
    id: id,
    destino: destino,
    descricao: descricao,
    incluso: incluso,
    duracao: duracao,
    localdePartida: localdePartida,
    localdeDestino: localdeDestino,
    preco: preco,
    qtdlugares: qtdlugares
  };
}

function adicionarPacoteViagem() {
  const dadosViagem = pegarDadosPacoteViagem();
  fetch("http://localhost:4000/pacoteviagem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dadosViagem),
  })
    .then((resposta) => {
      return resposta.json();
    })
    .then((dadosRecebidos) => {
      if (dadosRecebidos.status) {
        mostrarMensagem(dadosRecebidos.mensagem, "success");
        mostrarTabelaPViagem();
      } else {
        alert(dadosRecebidos.mensagem, "danger");
      }
    })
    .catch((erro) => {
      mostrarMensagem(erro.mensagem, "danger");
    });
}

function atualizarPacoteViagem() {
  const dadosViagem = pegarDadosPacoteViagem();
  
  fetch("http://localhost:4000/pacoteviagem", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dadosViagem),
  })
    .then((resposta) => resposta.json())
    .then((dadosRecebidos) => {
      if (dadosRecebidos.status) {
        mostrarMensagem(dadosRecebidos.mensagem, "success");
        formCadPViagem.reset();
        document.getElementById("atualizar").disabled = true;
        document.getElementById("cadastrar").disabled = false;
        document.getElementById("excluir").disabled = true;
        mostrarTabelaPViagem();
      } else {
        mostrarMensagem(dadosRecebidos.mensagem, "danger");
      }
    })
    .catch((erro) => {
      mostrarMensagem(erro.mensagem, "danger");
    });
}

function excluirPacoteViagem() {
  const id = document.getElementById("id").value;
  
  if (confirm(`Deseja realmente excluir o pacote de viagem com ID ${id}?`)) {
    fetch("http://localhost:4000/pacoteviagem", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then((resposta) => resposta.json())
      .then((dadosRecebidos) => {
        if (dadosRecebidos.status) {
          mostrarMensagem(dadosRecebidos.mensagem, "success");
          formCadPViagem.reset();
          document.getElementById("atualizar").disabled = true;
          document.getElementById("cadastrar").disabled = false;
          document.getElementById("excluir").disabled = true;
          mostrarTabelaPViagem();
        } else {
          mostrarMensagem(dadosRecebidos.mensagem, "danger");
        }
      })
      .catch((erro) => {
        mostrarMensagem(erro.mensagem, "danger");
      });
  }
}

function mostrarMensagem(mensagem, tipo = "success") {
  const espacoMensagem = document.getElementById("mensagem");
  espacoMensagem.innerHTML = `<div class="alert alert-${tipo}" role="alert">
      ${mensagem}
  </div>`;
  setInterval(() => {
    espacoMensagem.innerHTML = "";
  }, 5000);
}

function mostrarTabelaPViagem() {
  fetch("http://localhost:4000/pacoteviagem", {
    method: "GET",
  }).then((resposta) => {
    return resposta.json();
  }).then((dadosRecebidos) => {
      if (dadosRecebidos.status) {
        const pacoteViagem = dadosRecebidos.pacoteViagem;
        if (pacoteViagem.length > 0) {
          const espacoTabela = document.getElementById("espacoTabela");
          espacoTabela.innerHTML = "";

          const tabela = document.createElement("table");
          tabela.className = "table table-striped table-hover";

          const cabecalho = document.createElement("thead");
          const corpo = document.createElement("tbody");

          cabecalho.innerHTML = `
          <tr>
              <th>ID</th>
              <th>Destino</th>
              <th>Descrição</th>
              <th>Incluso</th>
              <th>Duração</th>
              <th>Local de Partida</th>
              <th>Local de Destino</th>
              <th>Preço</th>
              <th>Quantidade de Lugares</th>
              <th>Alterar</th>
              <th>Excluir</th>
          </tr>`;
          tabela.appendChild(cabecalho);

          for (let i = 0; i < pacoteViagem.length; i++) {
            const linha = document.createElement("tr");
            linha.innerHTML = `
              <td>${pacoteViagem[i].id}</td>
              <td>${pacoteViagem[i].destino}</td>
              <td>${pacoteViagem[i].descricao}</td>
              <td>${pacoteViagem[i].incluso}</td>
              <td>${pacoteViagem[i].duracao}</td>
              <td>${pacoteViagem[i].localdePartida}</td>
              <td>${pacoteViagem[i].localdeDestino}</td>
              <td>${pacoteViagem[i].preco}</td>
              <td>${pacoteViagem[i].qtdlugares}</td>
              <td>
                  <button class="btn btn-sm btn-warning" onclick = "capturarPViagem('${pacoteViagem[i].id}', '${pacoteViagem[i].destino}', '${pacoteViagem[i].descricao}', '${pacoteViagem[i].incluso}', '${pacoteViagem[i].duracao}', '${pacoteViagem[i].localdePartida}', '${pacoteViagem[i].localdeDestino}', '${pacoteViagem[i].preco}', '${pacoteViagem[i].qtdlugares}','atualizar')"><i class="bi bi-pencil-fill"></i></button> </td>
              <td>
                  <button class="btn btn-sm btn-danger" onclick = "capturarPViagem('${pacoteViagem[i].id}', '${pacoteViagem[i].destino}', '${pacoteViagem[i].descricao}', '${pacoteViagem[i].incluso}', '${pacoteViagem[i].duracao}', '${pacoteViagem[i].localdePartida}', '${pacoteViagem[i].localdeDestino}', '${pacoteViagem[i].preco}', '${pacoteViagem[i].qtdlugares}','excluir')"><i class="bi bi-trash3-fill"></i></button>
              </td>
          `;
            corpo.appendChild(linha);
          }

          tabela.appendChild(corpo);
          espacoTabela.appendChild(tabela);
        }
      } else {
        mostrarMensagem("Não há pacotes de viagens cadastrados.", "warning");
      }
    })
    .catch((erro) => {
      mostrarMensagem(erro, "danger");
    });
}

function capturarPViagem(id, destino, descricao, incluso, duracao, localdePartida, localdeDestino, preco, qtdlugares, acaoEscolhida = "atualizar") {
    document.getElementById("id").value = id;
    document.getElementById("destino").value = destino;
    document.getElementById("descricao").value = descricao;
    document.getElementById("incluso").value = incluso;
    document.getElementById("duracao").value = duracao;
    document.getElementById("localdePartida").value = localdePartida;
    document.getElementById("localdeDestino").value = localdeDestino;
    document.getElementById("preco").value = preco;
    document.getElementById("qtdlugares").value = qtdlugares;

    if (acaoEscolhida == "atualizar") {
        document.getElementById("atualizar").disabled = false;
        document.getElementById("cadastrar").disabled = true;
        document.getElementById("excluir").disabled = true;
    }
    else if (acaoEscolhida == "excluir") {
      document.getElementById("atualizar").disabled = true;
      document.getElementById("cadastrar").disabled = true;
      document.getElementById("excluir").disabled = false;
  }
   
}

formCadPViagem.addEventListener("submit", manipularEnvio);

document.getElementById("atualizar").onclick = atualizarPacoteViagem;
document.getElementById("excluir").onclick = excluirPacoteViagem;

mostrarTabelaPViagem();

