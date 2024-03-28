window.onload = function() {
   
    const botaoAdicionarAtributo = document.getElementById('adicionarAtributoBtn');
    botaoAdicionarAtributo.addEventListener('click', function() {
        const paragrafo = document.getElementById('paragrafo');
        paragrafo.textContent = 'Esta é uma piada sobre uma galinha.';
    });
};
