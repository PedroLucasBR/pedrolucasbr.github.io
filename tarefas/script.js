var listaElementos = document.querySelector('#app ul');
var inputElemento = document.querySelector('#app input');
var botao = document.querySelector('#app button');

var tarefas = JSON.parse(localStorage.getItem('lista_tarefas') || []);

function renderizarTarefas() {
    listaElementos.innerHTML = '';

    for (tarefa of tarefas) {
        var tarefaElemento = document.createElement('li');
        var textoTarefa = document.createTextNode(tarefa);

        var linkElemento = document.createElement('a');

        linkElemento.setAttribute('href', '#');
        linkElemento.setAttribute('id', 'batata');

        var pos = tarefas.indexOf(tarefa);
        linkElemento.setAttribute('onclick', 'excluirTarefa(' + pos + ')');

        var textoLink = document.createTextNode('Excluir');

        linkElemento.appendChild(textoLink);

        tarefaElemento.appendChild(textoTarefa);
        tarefaElemento.appendChild(linkElemento);
        listaElementos.appendChild(tarefaElemento);
    }
}

renderizarTarefas();

function adicionarTarefas() {
    var textoTarefa = inputElemento.value + '.';
    if (textoTarefa != '.') {
        tarefas.push(textoTarefa);
        inputElemento.value = '';
        renderizarTarefas();
        salvarTarefas();
    } else {
        inputElemento.setAttribute('placeholder', 'Digite algo aqui');
    }
}

botao.onclick = adicionarTarefas;

function excluirTarefa(pos) {
    tarefas.splice(pos, 1)
    renderizarTarefas();
    salvarTarefas();
}

function salvarTarefas() {
    localStorage.setItem('lista_tarefas', JSON.stringify(tarefas));
}