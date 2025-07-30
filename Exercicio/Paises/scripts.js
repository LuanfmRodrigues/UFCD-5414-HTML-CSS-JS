const formularioInscricao       = document.getElementById("formularioInscricao");
const nomeInscricao             = document.getElementById("nomeInscricao");
const empresaInscricao          = document.getElementById("empresaInscricao");
const emailInscricao            = document.getElementById("emailInscricao");
const telInscricao              = document.getElementById("telInscricao");
const msgInscricao              = document.getElementById("msgInscricao");
const procuraInput              = document.getElementById("procuraInput");
const termosCheckbox            = document.getElementById("permissaoCheckbox");

const erroNome                  = document.getElementById("erroNome");
const erroEmail                 = document.getElementById("erroEmail");
const erroMsg                   = document.getElementById("erroMsg");
const erroProcura               = document.getElementById("erroProcura");
const erroTermos                = document.getElementById("erroTermos");

const resultadosInscricao       = document.getElementById("resultadosInscricao");
const displayNomeUtilizador     = document.getElementById("displayNomeUtilizador");
const displayEmailUtilizador    = document.getElementById("displayEmailUtilizador");
const displayEmpresaUtilizador  = document.getElementById("displayEmpresaUtilizador");
const displayProcuraUtilizador  = document.getElementById("displayProcuraUtilizador");
const displayMsgUtilizador      = document.getElementById("displayMsgUtilizador");
const displayTermosAceites      = document.getElementById("displayTermosAceites");

formularioInscricao.addEventListener("submit", (event) => {
    event.preventDefault();

    let valido = true;

    
    if (nomeInscricao.value.trim() === "") {
        erroNome.textContent = "Coloca o seu nome, é obrigatório!";
        valido = false;
    } else {
        erroNome.textContent = "";
    }

    if (emailInscricao.value.trim() === "") {
        erroEmail.textContent = "Como vamos entrar em contato? Coloca o email.";
        valido = false;
    } else {
        erroEmail.textContent = "";
    }

    if (msgInscricao.value.trim() === "") {
        erroMsg.textContent = "Tas se achando né! Diz o que queres?";
        valido = false;
    } else {
        erroMsg.textContent = "";
    }

    if (procuraInput.value.trim() === "") {
        erroProcura.textContent = "Por favor, indique o que procura.";
        valido = false;
    } else {
        erroProcura.textContent = "";
    }

    if (!termosCheckbox.checked) {
        erroTermos.textContent = "Precisa aceitar os termos para prosseguir.";
        valido = false;
    } else {
        erroTermos.textContent = "";
    }

    
    if (valido) {
        displayNomeUtilizador.textContent = nomeInscricao.value;
        displayEmailUtilizador.textContent = emailInscricao.value;
        displayEmpresaUtilizador.textContent = empresaInscricao.value || "Não informado";
        displayProcuraUtilizador.textContent = procuraInput.value;
        displayMsgUtilizador.textContent = msgInscricao.value;
        displayTermosAceites.textContent  ? "Sim" : "Não";

        resultadosInscricao.style.display = "block";
        alert("Inscrição submetida com sucesso!");
    } else {
        resultadosInscricao.style.display = "none";
        alert("Por favor, preencha todos os campos com os seus dados e concorde com os termos.");
    }
});
