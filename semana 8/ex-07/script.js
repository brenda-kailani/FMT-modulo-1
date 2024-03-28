window.onload = function() {
  
    const botaoRemoverClasse = document.getElementById('removerClasseBtn');
    botaoRemoverClasse.addEventListener('click', function() {
        const elementoSegundoDiv = document.querySelector('#container div:nth-child(2)');
        elementoSegundoDiv.classList.remove('minhaClasse');
    });
};
