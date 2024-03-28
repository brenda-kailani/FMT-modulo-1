window.onload = function() {
    const botaoRemover = document.getElementById('removerBtn');
    botaoRemover.addEventListener('click', function() {
        const elementoPai = document.getElementById('container');
        const elementoFilho = elementoPai.querySelector('p');
        elementoPai.removeChild(elementoFilho);
    });
};