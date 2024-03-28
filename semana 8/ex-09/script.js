window.onload = function() {
    
    const botaoRemoverAtributo = document.getElementById('removerAtributoBtn');
    botaoRemoverAtributo.addEventListener('click', function() {
        const paragrafo = document.getElementById('paragrafo');
        paragrafo.removeAttribute('title');
        alert('O atributo "title" foi removido deste parágrafo.');
    });
};
