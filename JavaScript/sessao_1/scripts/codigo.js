// comentarios uma linha

/*
    comentarios de mais de uma linha
*/

/**
 *   Tipo de dados em JS
 * 
 *      -- Number --
 *          Interios (integer)
 *          Virgulas Flutuante (Float, double)
 *          decimal
 * 
 *      -- boolean --
 *          true ou false
 *      
 *      -- String --
 *          texto/ conjunto/ cadeia de caacteres
 *          como delimitador as aspas "" ou as plicas '' 
 * 
 *      -- Null --
 *          valor especial que representa ausência de valor
 * 
 *      -- undefined --
 *          variavel/ objeto não definifo ou sem um valor atribuido
 * 
 *      -- Tipod e dados complexos --
 *          Array 
 *          Object
 */

let total = 12; //undefined
let nome;  // undefined por não ter valor.

let subtotal = 10, artigo, preco, desconto = 0.1; // a variavel pode ser atribuinto no mesmo valor se estiver na mesma linha 

// tipo de saida
console.warn("Mensagem de aviso");
console.error("Mensagem de erro");
console.log(artigo);

// const PI = 3.14;
/*
    Constante são muito utilizadas com arrays e objetos literais
    Podem mudar o conteudo de algumas constantes, que estejam definifas mas não as pode, redifinir
    
    const formandos = ["Luan","Felipe", "Moraes", "Rodrigues"]; // uma constante nao pode ser redefinida ( nao se pode recriar uma cosntante com o nome formandos)
    console.log(frmandos);
    formandos.push("Pinho");
    console.log(formandos);
    
    document.write("<h2>Luan</h2>");
    window.alert("Operação Efetuada");  // o window.alert 
*/

/*
        -- Operadores Aritmeticos --
        +, -, *, /, %
        +=, -=, *=, /=
        ++, --
        **

*/
console.log(4**2);  // 16
Math.abs(-7.25);    //7.25
Math.ceil(1.4);     // 2 arredonda para cima
Math.floor(1.7);    // 1 arredonda para baixo
Math.round(1.4);    // 1
Math.round(1.5);    // 2
Math.round(1.6);    // 2
Math.exp(5);        // e**5
Math.max(5,10,3,35);    // 35
Math.min(2,5,7,12);     // 2
Math.pow(2, 3);     // 2*2*2 ->8
Math.sqrt(9);   // 3
Math.random();

//console.log(4 / "teste");

console.log(isNaN("teste"));

let valor = "23";
let valorConvertido = Number(valor);
let valorInt = parseInt(valor);
let ValorFloat = parseFloat(valor);
// console.log(typeof ValorFloat);

/*
    Condições

    -- Operadores Relacionais --
    >, <, >=, <=, ==, !=, ===, !==

    -- if --
    let preco = 12;

    if(preco > 12){
        console.log("Preço muito caro!");   
    }

    -- if...else --
    if(preco > 12){
        console.log("Preço muito caro!");   
    }else {
        console.log("Boa!!")
    }

    -- if ... else if ... else --
    let opcao = 1;

    if(opcao === 1){
    console.log("Boa esolha");
    
    }else if(opcao === 2 ){
    cosole.log("Escolha mais ou menos");
    
    }else {
        console.log("ma escolha");
    }

    -- Switc --
    switch(opcao){
        case 1:
            console.log("boa escolha");
            break;
        case 2:
            console.log("Escolha Boazinha");
            break
        case 3:
            Console.log("Ja deu ne");
            break:
        default:
            console.log("ufa");
    }

    -- operador ternario --

    let opcao = 1;
    let escolha = (opcao === 1 ) ? "certo" : "errado";

    -- Operador Logicos --
    AND (&&)  -> so devolve verdade se as duas opcoes forem verdade
    OR  (||)  -> pelo menos uma da operacoes tem que ser verdade
    NOT (! )  -> inverte para negacao

    let opcao = 1;
    let total = 40;

    if (opcao == 1 && total > 30){
        ....
    }
    if (opcao == 1 && total > 40){
        ....
    }

*/

/*
    -- Instruções de Repertição --

    -- while --
    let algarismo = 1;

    while(algarismo <= 10) {
    
        console.log(algarismo);
        algarismo++
    }

    -- Do While --
    let algarismo = 1;

    do{
        console.log(algarismo);
        algarismo++;
    }while(algarismo <=10);

    for(let algarismo = 1; algarsimo <=10; algarsimo++){
        console.log(algarsimo);
    }
*/
let ano = 2004;
let resultado;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    resultado = "É bissexto";
} else {
    resultado = "Não é bissexto";
}

console.log(resultado); // "É bissexto"


let numero = 5;
let fatorial = 1;
let contador = numero;

if (numero < 0) {
    console.log("Não existe fatorial de números negativos");
} else if (numero === 0) {
    console.log("0! = 1");
} else {
    while (contador > 1) {
        fatorial *= contador;
        contador--;
    }
    console.log(`${numero}! = ${fatorial}`);
}


/*
    para usar as aspas ou palicas tem que usar a barras antes da aspasE EX:  \"meu livro\"

    -- strings -- concatenar

    let str1 = "bom";
    let str2 = "Dia";
    let str3 = ", em que poss ser útil?";
    let res  = str1 + str2 + str3;  
    let res2 = str1.concat(str2, str3); -> faz o mesmo efeito da linha de cima.
    let res3 = '${str1} ${str2} ${str3}';


    let nome = "Luan Rodrigues";
    let nome1 = nome.toLowerCase();         -> minúsculas
    let nome2 = nome.ToUpperCase();         -> Maiúsculas
    let nome3 = nome.charAt(3);             -> n
    let nome4 = nome.indexOf("n");          -> 1
    let nome5 = nome.indexOf("n", 8);       -> -1 se ele nao encontrar entrega -1, 
    let nome6 = nome.lastIndexOf("n");      -> 4
    let nome7 = nome.lastIndexOf("n", 8);   -> -1
    let name8 = nome.substr(6, 8);          -> igues
    let name8 = nome.substr(4);             ->  rodrigues

    let outroNome = "   luan Rodrigues   ";
    let outroNome1 = outroNome.trim();                  -> "luan rodrigues" -> remove todo espaco em branco antes e depois 
    let outroNome2 = outroNome.replace("e", "#");       -> "luan Rodrigu#s"
    let outroNome3 = outroNome.startsWith("gu");        -> se existir no nome true / false
    let outroNome4 = outroNome.endWith("gues");         -> true / false
    let caractere = "A";
    console.log(caracatere.repet(4));  -> AAAA

    let ultimoNome = "Luan Rodrigues";

    for(let posicao = 0; posicao < ultimoNome.length; posicao++){
        console.log(ultimoNome[posicao]);
        console.log(ultimoNome.charAt(posicao));
    }

    for(let caracter of ultimoNome){
        console.log(caracter);
    }

*/ 

/*
    -- Array --

    E um tipo de dado ultilizado para quando queremos armazenar na mesma variavel/constante mais do que um valor
    let formando1 = "joana";
    let formando2 = "Bruno";
    let formando3 = "Emily";
    let formando4 = "Miguel";

    //sintaxe mais antiga
    let aluno = new Array("joana","bruno","Emily");

    //sintaxe mas recente e mais utilizada
    let formandos 0 ["joana","bruno","Emily","Miguel"];

    // Declara array vazios
    let alunosVazio = new Array(); //antigo
    let formandosVazio = [];        //Novo

    //criar array diferentes tipos de dados
    let valores = ["joana","true", 345, {localidade,Ermeside}];

    //length - numero de elementos do array (o tamanho do array)
    console.log(formandos.length)
    */

    let formandos = [];
    formandos[1] = "pedro";
    console.log(formandos)

    let formandos2 = ["Pedro", "Fernando", "Catarina"];
    let Primeiro =formandos2[0];
    let ultimo = formandos2[formandos2.length -1];
    let inexistente = formandos2[10];
    let doisNomes = formandos2.slice(1,3); // -> devolve os dois nome que tem na array Pedro, catarina
    console.log(doisNomes);

/*
    formandos.slice(0); extrai todo o conteudo do array
    formandos.slice(1,formandos.length-1);
    console.log(formandos.slice(1,formandos.length));

    formandos2.push("jose"); //add 
    formandos2.pop("Fernando");// exclui
    for(let i ; i < formandos2.length; i++){
        console.log(formandos2[i]);
    }
    
    for(let elementos of formandos2 ){
        console.log(elementos);
    }

    indeOf - devolve a posicao em que um determinado valor se encontra no array
    formandos2.indexOf("Pedro"); -> 1
    formandos2.indexOf("Luis");  -> -1

    includes ->devolce true se um elementos existir num array, caso contrario devolve false
    formandos2.includes("Pedro"); -> true
    formandos2.includes("Luis");  -> -false

    let Nome = "luan Rodrigues";
    let  caracteres = Nome.split(""); // transforma a variavel em array
    console.log(caracteres);
    console.log(formandos2.join(" ")); // junta tudo que estar no array ou por ("," ," ", "-","*")


*/
 let paises = [
    ["Portugal","Lisboa"],
    ["Brasil", "Pernambuco"],
    ["Pernambuco", "Recife"]
 ];
 console.log(paises[2][1]);
 paises.push(["Australia", "golden Cost"]);

 console.log(paises);
 console.log(paises.length);
 console.log([0].length);

let temperaturas = [12, 34, 45, 3, 8, 23, 56];
let minima = Math.min(temperaturas);
let maxima = Math.max(temperaturas);

let soma = 0;
for(let i= 0; i< temperaturas.length; i++){
    soma += temperaturas[i];
}
let media = soma/2;

console.log(maxima);
console.log(minima);
console.log(media);

/*
        -- Objetos literais --

        Estrutura de dados semelhante a array associativos (ou dicionarios)
        esta estrutura de dados é muito utilizada para configurarções e ´r base do JASON (JavaScript Object Notation)
        esta estrutura de dados é constituida por pares de chave/valor (key/values)

        let pessoa = {
            nome: "Luan Rodrigues";
        };

        let pessoa = {
            nome: "Luan rodrigues",
            localidade: "Ermesinde",
            altura: 1.69,
            aluno: true
        };
*/

    console.log(pessoa.nome);

    let pessoas = [
        {nome: "Alicia Louise", localidade: "Ermesinde",contato: [98765432, 3456789]},
        {nome: "Andrezza lima", localidade: "Aguas Santas"},
        {nome: "Manu Manuella", localidade: "Maia"}
    ]

    //console.log(pessoas[1].localidade);
    //console.log(pessoas[0].contato[1]);
    pessoas.push({nome: "Bb", localidade: "Rio tinto"});

    let pessoa ={
        nome: "Maria Fatima",
        endereco:{
            morada:"Rua da alegria, 12",
            localidade: "Ermesimde",
            cp: "4425-093"
        },
        contacto:{
            email: "lulululu@huhu",
            telefone: [98765432,4567890]
        }
    }
    console.log(pessoa.endereco.cp);
    console.log(pessoa.contacto.telefone[1]);
    pessoa.endereco.morada = "alameda da granja, 152";
    pessoa.dataNasc = "12/12/2000";  // acresentar algum campo a mais
    pessoa.morada.pais = "brasil"; // mesma forma para acresentar.

    