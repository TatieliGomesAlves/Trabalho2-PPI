
function atualizarPreco() {
  const precoPorPessoa = 5500.00;
  const quantidadeLugares = document.getElementById('numLugares').value; 
  const precoTotal = precoPorPessoa * quantidadeLugares;
  
  const precoTotalFormatado = precoTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  document.getElementById('precoTotal').innerText = precoTotalFormatado;
}

function finalizarReserva() {
  const quantidadeLugares = document.getElementById('numLugares').value;
  const precoTotal = document.getElementById('precoTotal').innerText;

  if (quantidadeLugares < 1 || quantidadeLugares > 8) {
      alert('A quantidade de lugares selecionada está fora do limite permitido.');
      return;
  }

  alert(`Reserva realizada com sucesso! Você reservou ${quantidadeLugares} lugares, totalizando R$ ${precoTotal}.`);
}

