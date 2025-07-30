/*


*/



const novaTarefaInput    = document.getElementById("novaTarefaInput");
const adicionarBtn       = document.getElementById("adicionarBtn");
const listaDeTarefa      = document.getElementById("listaDeTarefas");
const tarefaInicial      = document.getElementById("tarefaInicial");

function configurarBotoestarefas(tarefaElemnet){
    const clonarBtn     = tarefaElemnet.querySelector(".clonarBtn");
    const removerBtn    = tarefaElemnet.querySelector(".removerBtn");

    //configurar o botao clonar
    clonarBtn.addEventListener("click", ()=> {
        const tarefaClonada = tarefaElemnet.cloneNode(true);
        const spanTexto = tarefaClonada.querySelector("span");
        spanTexto.textContent += "(copia)";
        listaDeTarefa.appendChild(tarefaClonada);
        configurarBotoestarefas(tarefaClonada);
    });
    //configurar o botao remover
    removerBtn.addEventListener("click", () =>{
        tarefaElemnet.remover();
    });
}

//funcao para cria um novo item de tarefa
function criarTarefaItem(textoTarefa){
    const novoLi = document.createElement("li");

    //Criar um elemento span para o texto da tarefa
    const spanTexto = document.createElement("span");
    spanTexto.textContent = textoTarefa;
    novoLi.appendChild(spanTexto);

    //criar a div para os botoes
    const divBotoes = document.createElement("div");
    divBotoes.classList.add("Botoes-acao");

    //criar e configurar o botao de clonar
    const clonarBtn = document.createElement("button");
    clonarBtn.textContent = "Clonar";
    clonarBtn.classList.add("clonarBtn");


    //criar e configurar o botao de clonar
    const removerBtn = document.createElement("button");
    removerBtn.textContent = "Remover";
    removerBtn.classList.add("removerBtn");
    
    
    //Adicionar adiv com os botoes
    novoLi.appendChild(divBotoes);

    return novoLi;

    //configurar os eventos dos  botoes
    configurarBotoestarefas(novoLi);
}

adicionarBtn.addEventListener("click",() => {
    const textoTareta = novaTarefaInput.ariaValueMax.trim();

    if(textoTareta !== ""){
        const novaTarefa = criarTarefaItem(textoTarefa);// Ainda falta criar a funcao

        listaDeTarefa.appendChild(novaTarefa);
        novaTarefaInput.value = "";
    }
});

//configurar os botoes da tarefa inicial
