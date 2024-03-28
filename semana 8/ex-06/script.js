window.onload = function() {
  
    const botaoAdicionarClasse = document.getElementById('adicionarClasseBtn');
    botaoAdicionarClasse.addEventListener('click', function() {
        const elementoSegundoDiv = document.querySelector('#container div:nth-child(2)');
        elementoSegundoDiv.classList.add('novaClasse');
    });
};
