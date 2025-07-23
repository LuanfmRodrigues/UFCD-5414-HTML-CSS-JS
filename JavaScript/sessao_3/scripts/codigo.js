/*
    .Um bloco de código {}, e é desenhado para efetuar uma ou mais tarefas.
    .Pode ser reutilizado
    .Por Omissão, são executafas apenas quando são invocadas
    .Utilizadas normalmente para agrupa um conjuto de comandos que se pretende executar de forma repetida
    .Para tornar o código mais legivel, porque estamos a dividir o código em "secções" 
    .O codigo torna-se muito mais facilde gerir e manter
    .Objeto em JS (Math) utilizam métodos, mas que na realidade são funções.. dá-se nome diferente apenas por estarem declarado dentro desse objeto
    .Tradicionamente, é comum declara-se as funções no tpo do código, embora não seja obrigatório, é considerado boa prática

*/
function mostra(){
    console.log("Mensagem");
}
//  O nosso browser passa a conhecer esta função, mas não executa.
//  As regras de atribuição de nomes a função são as mesma das variáveis

let outraMostra = function (){
    console.log("Outra Mensagem");
}

let maisMostra = new Function('console.log("Cenas")');
/*
    let maisMostra = function (){
    console.log("cenas")}
*/

mostra();
outraMostra();
/*
function quadrado(numero){
    let valor = numero * numero;

    console.log(valor);
} 

quadrado(4);

function multiplica (n1,n2){
    let valor = n1 * n2;

    console.log(valor);
}
*/
function quadrado(numero){
    let valor = numero * numero;

    return valor;
}

let nQuadrado = quadrado(4) + 5 ; // pode mudar e alterar valor antes de receber na variavel.
console.log(nQuadrado);

/*
    Arrow - Functions 
    .são uma forma maus sucinta e diferente de escrever uma função.
*/

let resultado = function(){ // forma normal de escrever a a function
    return "Pedro";
}

let resultado2 = () => "Pedro"; // foram Arrow -> direta e simple 

console.log(resultado());
console.log(resultado2());

let resultado3 = (nome) => "Olá" + nome;
console.log(resultado3("Luan"));

let resultado4 = (a,b) => a *b;
console.log(resultado4(3,2));

let resultado5 = (valor1, valor2) => { // se for necessario o uma logica maior para ser usado no ARROW
    //logica
    if(valor1 > valor2){
        alert("O valor 1 é maior:" + valor1 );

    }else{
        alert("Valor 2 é maior:" + valor2);
    }
}

/*
    IIFE - immediately Invvoked Function Expression
    .Uma IIFE é uma funcao que é invocada, mal é definida, sem necessidade de ser  invocada de forma explicida
    As variaves existente dentro da funcao nao podem ser acedidas fora dela 

*/

(function(){
    let x = "Olá";
    alert(x);
})();

let msg = "Bom dia";
(function (msg){
    let tamanho = msg.length;
    console.log("O Tamnho da Mensagem é:" + tamanho); 
})(msg);


let resultado6 = (function(){
    let nome = "Luan Rodrigues";
    return nome;

})();
console.log(resultado6);

// atividade feita