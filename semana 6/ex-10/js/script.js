
function alterarNomeDeUsuario(novoNomeUsuario) {
  const elementoNomeUsuario = document.querySelector(".profile-name");
  elementoNomeUsuario.innerText = novoNomeUsuario;
}


function alterarEmailDoUsuario(novoEmailUsuario) {
  const elementoEmailUsuario = document.querySelector(".profile-email");
  elementoEmailUsuario.innerText = novoEmailUsuario;
}


function alterarTelefoneDoUsuario(novoTelefoneUsuario) {
  const elementoTelefoneUsuario = document.querySelector(".profile-phone");
  elementoTelefoneUsuario.innerText = novoTelefoneUsuario;
}


function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


function validarTelefone(telefone) {
  return /^\(\d{2}\) \d{4,5}-\d{4}$/.test(telefone);
}

function exibirMensagemDeBoasVindas() {
  alert("Seja bem vindo!");
}

window.onload = exibirMensagemDeBoasVindas;
