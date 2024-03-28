window.onload = function() {
    const novoElemento = document.createElement('p');
    
    
    novoElemento.textContent = 'Novo elemento adicionado como filho.';
    

    const elementoPai = document.getElementById('container');
    
 
    elementoPai.appendChild(novoElemento);
};
