function exibirMensagemDeBoasVindas() {
  alert("Seja bem vindo!");
}

//No arquivo JavaScript,
//selecione elementos HTML (por exemplo, o elemento que contém o nome do usuário) e atualize seu conteúdo dinamicamente usando o JavaScript.

// pegar o elemento com o nome do usuario
// alteraro conteudo

function pegarElementoNomeUsuario() {
  return document.querySelector(".profile-name");
}

function alterarConteudoElemento(elemento, novoConteudo) {
    elemento.innerText = novoConteudo;
}

function alterarNomeDeUsuario(novoNomeUsuario) {
  const elementoNomeUsuario = pegarElementoNomeUsuario();
  alterarConteudoElemento(elementoNomeUsuario, novoNomeUsuario);
}

alterarNomeDeUsuario('Brenda Kailani');