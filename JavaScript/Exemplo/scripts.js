/*
    .a engine de JavaScript interpreta a pagina como um objeto dom (document bject Model)
    .O Dom representa a pagina como uma estrutura de arcore, onde cada parte documento é um nó (node) que pode ser manipulado pelo javascript

    Exemplo: Aceder e alterar o texto de um paragrafo quando se clica num botao
*/

const paragrafo = document.getElementById("meuParagrafo");
const mudarBtn = document.getElementById("mudarParagrafoBtn");

paragrafo.textContent = "Agora o texto foi alterado em javaScript"

mudarBtn.addEventListener("click",function(){
    paragrafo.style.backgroundColor= "#d4edda";
    paragrafo.style.color = "#155724";

    paragrafo.setAttribute("title","Voce clicou no botão!");

    mudarBtn.textContent = "Paragrafo alterado!";
    mudarBtn.disabled = true;
})