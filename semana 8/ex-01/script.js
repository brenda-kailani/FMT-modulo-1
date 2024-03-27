document.addEventListener("DOMContentLoaded", function() {
    var elemento = document.getElementById("alterarElemento");

    if (elemento) {
        elemento.style.backgroundColor = "blue"; 
    } else {
        console.error("O elemento com o ID 'meuElemento' não foi encontrado.");
    }
});
