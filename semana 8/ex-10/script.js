window.onload = function() {
    const inputNovaTarefa = document.getElementById('novaTarefaInput');
    const btnAdicionarTarefa = document.getElementById('adicionarTarefaBtn');
    const listaTarefas = document.getElementById('listaTarefas');

    btnAdicionarTarefa.addEventListener('click', function() {
        const novaTarefa = inputNovaTarefa.value.trim();
        if (novaTarefa !== '') {
            const li = document.createElement('li');
            li.textContent = novaTarefa;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    li.style.textDecoration = 'line-through';
                } else {
                    li.style.textDecoration = 'none';
                }
            });

            const btnRemover = document.createElement('button');
            btnRemover.textContent = 'Remover';
            btnRemover.addEventListener('click', function() {
                li.remove();
            });

            li.appendChild(checkbox);
            li.appendChild(btnRemover);
            listaTarefas.appendChild(li);

            inputNovaTarefa.value = '';
        }
    });
};
