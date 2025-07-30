/*
    Tema: Metodo para encontrar elementos no dom
    1) selecao por ID: Permite selecionar um elemento unico
    2) Selecao por classe/tag: Permite selecionar varios elementos simultaneamente
    3) selecap por query: Permite uma selecao mais flexivel
    4) Intercao: Interacao entre elementos

*/

const imagemPrincipal = document.getElementById("imagemPrincipal");

//const miniaturas = document.getElementByIdClassName("miniatura-img");
const miniaturas = document.querySelectorAll(".miniatura-img");

miniaturas.forEach(miniatura =>{
    miniatura.addEventListener("click", ()=>{
        miniaturas.forEach(img => img.classList.remove("selecionada"));

        miniatura.classList.add("selecionada");

        const fullSrc = miniatura.getAttribute("data-full-src");

        imagemPrincipal.src = fullSrc;
        imagemPrincipal.alt = miniatura.alt.replace("Miniatura", "imagem Principal");
    })
});

// inicializar com a primeira imagem selecionada
if(miniaturas.length > 0){
    miniaturas[0].click();//simula um click na primeira imagem
}