// //--------------------------- APLICAÇÃO DE MASCARA -----------------------------------

// function aplicarMascaraCPF(campo) {
//   campo.value = campo.value
//     .replace(/\D/g, "")
//     .slice(0, 11)
//     .replace(/^(\d{3})(\d)/, "$1.$2")
//     .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
//     .replace(/\.(\d{3})(\d{1,2})$/, ".$1-$2")
//     .slice(0, 14);
// }

// function aplicarMascaraTelefone(campo) {
//   campo.value = campo.value
//     .replace(/\D/g, "")
//     .replace(/(\d{2})(\d)/, "($1) $2")
//     .replace(/(\d{5})(\d)/, "$1-$2")
//     .slice(0, 15);
// }

// function aplicarMascaraCEP(campo) {
//   campo.value = campo.value
//     .replace(/\D/g, "")
//     .replace(/(\d{5})(\d)/, "$1-$2")
//     .slice(0, 9);
// }

// function aplicarMascaraEmail(campo) {
//   campo.value = campo.value
//     .replace(/\s/g, "")
//     .replace(/[^a-zA-Z0-9@._-]/g, "")
//     .replace(/@{2,}/g, "@")
//     .replace(/\.{2,}/g, ".");
// }

// // ---------------------------------------//-----------------------------------------------//

// // Algoritmo Validar CPF
// function validarCPF(cpf) {
//   cpf = cpf.replace(/\D/g, "");
//   if (cpf.length !== 11 || /^(\d)\1*$/.test(cpf)) {
//     return false;
//   }

//   let soma = 0;
//   let resto;
//   for (let i = 1; i <= 9; i++) {
//     soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
//   }
//   resto = (soma * 10) % 11;
//   if (resto === 10 || resto === 11) {
//     resto = 0;
//   }
//   if (resto !== parseInt(cpf.charAt(9))) {
//     return false;
//   }

//   soma = 0;
//   for (let i = 1; i <= 10; i++) {
//     soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
//   }
//   resto = (soma * 10) % 11;
//   if (resto === 10 || resto === 11) {
//     resto = 0;
//   }
//   return resto === parseInt(cpf.charAt(10));
// }

// // Algoritmo Validar Telefone

// function validarTelefone(telefone) {
//   telefone = telefone.replace(/\D/g, "");

//   if (telefone.length !== 10 && telefone.length !== 11) {
//     return false;
//   }

//   if (/^(\d)\1*$/.test(telefone)) {
//     return false;
//   }

//   const ddd = parseInt(telefone.slice(0, 2), 10);
//   if (ddd < 11 || ddd > 99) {
//     return false;
//   }

//   if (telefone.length === 11 && telefone.charAt(2) !== "9") {
//     return false;
//   }

//   return true;
// }

// // Algoritmo Validar CEP
// function validarCEP(cep) {
//   cep = cep.replace(/\D/g, "");

//   if (cep.length !== 8) {
//     return false;
//   }

//   if (!/^\d{8}$/.test(cep)) {
//     return false;
//   }

//   return true;
// }

// // Algoritmo Validar Data de Nascimento

// function validarDatadeNascimento(data) {
//   data = data.replace(/\D/g, "");

//   if (data.length !== 8) {
//     return false;
//   }

//   const ano = parseInt(data.slice(0, 4), 10);
//   const mes = parseInt(data.slice(4, 6), 10);
//   const dia = parseInt(data.slice(6, 8), 10);

//   if (ano < 1900 || ano > new Date().getFullYear()) {
//     return false;
//   }
//   if (mes < 1 || mes > 12) {
//     return false;
//   }
//   if (dia < 1 || dia > 31) {
//     return false;
//   }

//   const dataObjeto = new Date(ano, mes - 1, dia);

//   if (
//     dataObjeto.getFullYear() !== ano ||
//     dataObjeto.getMonth() !== mes - 1 ||
//     dataObjeto.getDate() !== dia
//   ) {
//     return false;
//   }

//   const hoje = new Date();
//   const idade =
//     hoje.getFullYear() -
//     ano -
//     (hoje.getMonth() < mes - 1 ||
//     (hoje.getMonth() === mes - 1 && hoje.getDate() < dia)
//       ? 1
//       : 0);

//   return idade >= 0 && idade <= 120;
// }

// // Algoritmo Validar Email
// function validarEmail(email) {
//   email = email.trim();
//   const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   return regex.test(email);
// }

// // ----------------------- FUNÇÃO MOSTRAR, LIMPAR ERRO E LIMPAR CAMPOS ------------------------------

// // Função para Mostrar Erro
// function mostrarErro(campo, mensagem) {
//   campo.classList.add("is-invalid");
//   campo.nextElementSibling.textContent = mensagem;
// }

// // Função para Limpar o Erro
// function limparErro(campo) {
//   campo.classList.remove("is-invalid");
//   campo.nextElementSibling.textContent = "";
// }
// // Limpar Campos
// function limparCampos() {
//   const campos = document.querySelectorAll("#formulario input");

//   campos.forEach((campo) => {
//     campo.value = "";
//     campo.classList.remove("is-invalid");

//     const mensagemErro = campo.nextElementSibling;
//     if (mensagemErro && mensagemErro.classList.contains("invalid-feeback")) {
//       mensagemErro.textContent = "";
//     }
//   });
// }

// // //--------------------------------- VALIDAR FORMULÁRIO -------------------------------------//
// document
//   .getElementById("formulario")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     let valido = true;

//     const cpf = document.getElementById("cpf");
//     if (!validarCPF(cpf.value)) {
//       valido = false;
//       mostrarErro(cpf, "CPF inválido!");
//     } else {
//       limparErro(cpf);
//     }

//     const telefone = document.getElementById("telefone");
//     if (!validarTelefone(telefone.value)) {
//       valido = false;
//       mostrarErro(telefone, "Telefone inválido!");
//     } else {
//       limparErro(telefone);
//     }

//     const cep = document.getElementById("cep");
//     if (!validarCEP(cep.value)) {
//       valido = false;
//       mostrarErro(cep, "CEP inválido!");
//     } else {
//       limparErro(cep);
//     }

//     const email = document.getElementById("email");
//     if (!validarEmail(email.value)) {
//       valido = false;
//       mostrarErro(email, "Email inválido!");
//     } else {
//       limparErro(email);
//     }

//     const DatadeNascimento = document.getElementById("DatadeNascimento");
//     if (!validarDatadeNascimento(DatadeNascimento.value)) {
//       valido = false;
//       mostrarErro(DatadeNascimento, "Data de nascimento é inválida!");
//     } else {
//       limparErro(DatadeNascimento);
//     }
//     if (valido) {
//       limparCampos();
//       alert("Cadastro Realizado com Sucesso!");
//     }
//   });


// // -------------------------------- ONBLUR -------------------------------------

// document.getElementById("cpf").addEventListener("input", function () {
//   aplicarMascaraCPF(this);
// });

// document.getElementById("telefone").addEventListener("input", function () {
//   aplicarMascaraTelefone(this);
// });

// document.getElementById("cep").addEventListener("input", function () {
//   aplicarMascaraCEP(this);
// });

// document.getElementById("email").addEventListener("input", function () {
//   aplicarMascaraEmail(this);
// });

// // ------------------------- VALIDAR PREENCHIMENTO OBRIGATÓRIO ---------------------------------//

// // Função que valida e mostra o erro, caso o usuario tente passar para o proximo campo, sem preencher o anterior.

// function validarCampo(campo, mensagem) {
//   if (campo.value.length == 0) {
//     mostrarErro(campo, mensagem);
//     return false;
//   } else {
//     limparErro(campo);
//     return true;
//   }
// }

// const nome = document.getElementById("nome");
// nome.addEventListener("blur", function () {
//   valido = validarCampo(nome, "Nome é obrigatório.");
// });

// const sobrenome = document.getElementById("sobrenome");
// sobrenome.addEventListener("blur", function () {
//   valido = validarCampo(sobrenome, "Sobrenome é obrigatório.");
// });

// const DatadeNascimento = document.getElementById("DatadeNascimento");
// DatadeNascimento.addEventListener("blur", function () {
//   valido = validarCampo(DatadeNascimento, "Data de nascimento é obrigatório.");
// });

// const naturalidade = document.getElementById("naturalidade");
// naturalidade.addEventListener("blur", function () {
//   valido = validarCampo(naturalidade, "Naturalidade é obrigatório.");
// });

// const cpf = document.getElementById("cpf");
// cpf.addEventListener("blur", function () {
//   valido = validarCampo(cpf, "CPF é obrigatório.");
// });

// const email = document.getElementById("email");
// email.addEventListener("blur", function () {
//   valido = validarCampo(email, "Email é obrigatório.");
// });

// const endereço = document.getElementById("endereço");
// endereço.addEventListener("blur", function () {
//   valido = validarCampo(endereço, "Endereço é obrigatório.");
// });

// const cidade = document.getElementById("cidade");
// cidade.addEventListener("blur", function () {
//   valido = validarCampo(cidade, "Cidade é obrigatório.");
// });

// const cep = document.getElementById("cep");
// cep.addEventListener("blur", function () {
//   valido = validarCampo(cep, "Cep é obrigatório.");
// });

// const telefone = document.getElementById("telefone");
// telefone.addEventListener("blur", function () {
//   valido = validarCampo(telefone, "Telefone é obrigatório.");
// });

// const formFile = document.getElementById("formFile");
// formFile.addEventListener("blur", function () {
//   valido = validarCampo(formFile, "Foto é obrigatório.");
// });
