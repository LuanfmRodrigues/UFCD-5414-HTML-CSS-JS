const formularioInscricao   = document.getElementById("formularioInscricao");
const nomeInscricao         = document.getElementById("nomeInscricao");
const emailInscricao        = document.getElementById("emailInscricao");
const passwordInscricao     = document.getElementById("passwordInscricao");
const termosCheckbox        = document.getElementById("termosCheckbox");

const erroNome              = document.getElementById("erroNome");
const erroTermos            = document.getElementById("erroTermos");

const resultadosInscricao       = document.getElementById("resultadosInscricao");
const displayNomeUtilizador     = document.getElementById("displayNomeUtilizador");
const displayEmailUtilizador    = document.getElementById("displayEmailUtilizador");
const displayGeneroUtilizador   = document.getElementById("displayGeneroUtilizador");
const displayTermosAceites      = document.getElementById("displayTermosAceites");

formularioInscricao.addEventListener("submit", (event) => {
    event.preventDefault(); // impede que a página seja recarregada

    let valido = true;

    // Validação do nome
    if(nomeInscricao.value.trim() === ""){
        erroNome.textContent = "O nome do utilizador é obrigatório!";
        valido = false;
    } else {
        erroNome.textContent = "";
    }

    // Validação dos termos
    if(!termosCheckbox.checked){
        erroTermos.textContent = "Deve concordar com os termos e condições";
        valido = false;
    } else {
        erroTermos.textContent = "";
    }

    // Obter género selecionado
    const generoSelecionado = document.querySelector('input[name="genero"]:checked')?.value;

    if(valido){
        displayNomeUtilizador.textContent = nomeInscricao.value;
        displayEmailUtilizador.textContent = emailInscricao.value;
        displayGeneroUtilizador.textContent = generoSelecionado || "Não especificado";
        displayTermosAceites.textContent = termosCheckbox.checked ? "Sim" : "Não";

        resultadosInscricao.style.display = "block";
        alert("Inscrição submetida com sucesso!");
    } else {
        resultadosInscricao.style.display = "none";
        alert("Por favor, preencha todos os campos com os seus dados e concorde com os termos.");
    }
});
