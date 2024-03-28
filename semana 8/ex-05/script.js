window.onload = function() {
   
    const botaoAlterarEstilo = document.getElementById('alterarEstiloBtn');
    botaoAlterarEstilo.addEventListener('click', function() {
        const elementos = document.getElementsByClassName('pClasse');
     
        for (let i = 0; i < elementos.length; i++) {
            elementos[i].style.color = 'red';
            elementos[i].style.fontWeight = 'normal';
        }
    });
};
