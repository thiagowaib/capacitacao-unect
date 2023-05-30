/**
 *  ==============================
 *  Uso de Variáveis no Javascript
 *  ==============================
*/

// Variáveis Mutaveis
var corFavorita = "Vermelho";
let querCafe = true;

corFavorita = "Azul"; // "Vermelho" -> "Azul"
corFavorita = "Roxo"; // "Azul" -> "Roxo"

querCafe = false; // true -> false
querCafe = "sim"; // false -> "sim" (Mudança de tipo dinâmica)


// Constantes
const dataNascimento = 2002;
dataNascimento = 2001; //! erro !


/**
 *  ==============================
 *  Tipos de Dados no Javascript
 *  ==============================
*/
// Boolean: true/false
let taSol = true;

// Number: valores numéricos
let idade = 21;
let preco = 49.99;

// String: valores literais de texto
let nome = "Thiago";
let altura = "1.77";

// Undefined: Variável definida porém sem valor
// Null: Ausência



/**
 *  ========================
 *  Operadores no Javascript
 *  ========================
*/
//? Operadores Aritiméticos
// Atribuição (=):
let descricao = "Torta de Frango";
// Soma (+):
let x = 1 + 2;
// Subtração (-):
let y = 1 - 2;
// Divisão (/):
let z = 1 / 2;
// Multiplicação (*):
let w = 1 * 2;
// Potênciação (**): 2²
let t = 2 ** 2;
// Módulo (%): Resto da Divisão
let u = 2 % 2;


//? Operadores Lógicos
// A fonte que eu uso liga diferentes caractéres para formar simbolos mais legiveis, vou
// Colocar dentro de [] quais caracteres formam o quê para facilitar na capacitação ;D

// Igualdade (==) [= =] -> Compara a igualdade de dois valores e retorna um valor booleano true/false
(1 == 2)  // False
(1 == 1)  // True
(1 == "1")// True

// Igualdade Literal (===) [= = =] -> Compara a igualdade e tipo de dois valores e retorna um valor booleano true/false
(1 == 2)  // False
(1 == 1)  // True
(1 == "1")// False

// Maior que... (>) [>]
// Maior ou Igual que... (>=) [> =]
// Menor que... (<) [<]
// Menor ou Igual que... (<=) [< =]

// Diferente de... (!=) [! =]
// Diferente Literal de... (!==) [! = =]

// condição 1  E  condição 2 (&&)
((1 == 1) && (1 == 2))
// condição 1 OU  condição 2 (||)
((1 == 1) || (1 == 2))

// Negação (!)
!(true)  // -> False
!(false) // -> True


/**
 *  ================================================
 *  Estruturas de Controle de Fluxo no Javascript
 *  ================================================
*/

//? Tomada de Decisão: IF / ELSE IF / ELSE
let a = 1;
if(a > 5) {
    console.log("'A' é maior que 5")
} else if ((a >= 0) && (a <= 5)) {
    console.log("'A' está entre 0 e 5")
} else {
    console.log("'A' é menor que 0")
}

//? Tomada de Decisão: SWITCH
switch (a) {
    case 5:
        console.log("'A' é 5")
        break;
    case 4:
        console.log("'A' é 4")
        break;
    case 3:
        console.log("'A' é 3")
        break;
    case 2:
        console.log("'A' é 2")
        break;
    case 1:
        console.log("'A' é 1")
        break;
    case 0:
        console.log("'A' é 0")
        break;
    default:
        console.log("'A' não está entre 0 e 5")
        break;
}

let i;
//? Recursividade: WHILE
i = 0;
while(i < 10) {
    console.log("'i' é igual a " + i)
    i += 1 // (i = i + 1) -> Análogo a (i += 1) ou (i++)
}
// i = 0  ->  true  ->  'i' é igual a 0
// i = 1  ->  true  ->  'i' é igual a 1
// i = 2  ->  true  ->  'i' é igual a 2
// i = 3  ->  true  ->  'i' é igual a 3
// i = 4  ->  true  ->  'i' é igual a 4
// i = 5  ->  true  ->  'i' é igual a 5
// i = 6  ->  true  ->  'i' é igual a 6
// i = 7  ->  true  ->  'i' é igual a 7
// i = 8  ->  true  ->  'i' é igual a 8
// i = 9  ->  true  ->  'i' é igual a 9
// i = 10  -> false


//? Recursividade: FOR
// 1º Parâmetro: Atribuições feitas ao abrir o FOR Loop
// 2º Parâmetro: Condições de checagem para entrar no corpo do loop
// 3º Parâmetro: Atribuições feitas ao fechar um ciclo do FOR Loop
for(i = 0; i < 10; i ++) {
    console.log("'i' é igual a " + i)
}
// i = 0  ->  true  ->  'i' é igual a 0
// i = 1  ->  true  ->  'i' é igual a 1
// i = 2  ->  true  ->  'i' é igual a 2
// i = 3  ->  true  ->  'i' é igual a 3
// i = 4  ->  true  ->  'i' é igual a 4
// i = 5  ->  true  ->  'i' é igual a 5
// i = 6  ->  true  ->  'i' é igual a 6
// i = 7  ->  true  ->  'i' é igual a 7
// i = 8  ->  true  ->  'i' é igual a 8
// i = 9  ->  true  ->  'i' é igual a 9
// i = 10  -> false

//? Estrutura de Funções
function divide (a, b) {
    if (b == 0){
        b = 1;
    }

    return a / b;
}

/* Função anônima: Sem identificador (Arrow Function)
    (a, b) => {
        return a * b
    }
*/

const multiplica = (a, b) => {
    return a * b
}

//? Tratamento de Erros e Exceções: Try...Catch...Finally
function buscaDadosServidor() {
    try{
        // Vamos supor que aqui o código busca algo do servidor
        // e espera receber um valor de texto não vazio
        let resultado // <- Resultado da Requisição
    
        if(resultado == "") {
            throw ("Resultado vazio!")
        }

        return resultado;

    }
    // Caso haja um throw na execução, o código do try{} para a execução e vem para esse ponto 
    catch (err) { 
        console.error(err) // Resultado vazio!
    } 
    // O bloco finally{} é executado ao final da execução do try{} ou do catch{}
    finally {
        console.log("Fim da Função")
    }
}


/**
 *  ================================================
 *  Arrays e Objetos no Javascript
 *  ================================================
*/
//? Arrays -> Listas Ordenadas de Valores
let frutas = ["Maça", "Goiaba", "Tomate", "Cenoura"]
let alturas = [1.75, 1.54]

//Arrays tem métodos específicos que ajudam na vida do programador
frutas.push("Banana") //Adiciona elementos ao final: "Maça", "Goiaba", "Tomate", "Banana"
frutas.pop()          //Remove o último elemento:    "Maça", "Goiaba", "Tomate"

alturas.length //Quantidade de elementos no array: 2
alturas.join(" - ") // Retorna uma string unindo os elementos com o separador indicado: "1.75 - 1.54"


// ForEach (Loop integrado para arrays)
// 1º Parâmetro: Uma função que recebe como parâmetros: Elemento atual e Posição do Elemento atual
frutas.forEach((frutaAtual, indexAtual) => {
    console.log(`Fruta #${indexAtual}: ${frutaAtual}`);
})
// Fruta 0: Maça
// Fruta 1: Goiaba
// Fruta 2: Tomate
// Fruta 3: Cenoura


// Map: Mesma coisa do ForEach só que para cada iteração retorna algo, compondo um novo array
let dobroAlturas = [];
dobroAlturas = alturas.map((alturaAtual, indexAtual) => {
    return alturaAtual * 2;
})
// dobroAlturas = [3.5, 3.08]

// Filter: Filtra um array de acordo com alguma condição
let frutasMaduras = [];
frutasMaduras = frutas.filter(frutaAtual => (frutaAtual == "Maça" || frutaAtual == "Tomate")) 
// frutasMaduras = ["Maça", "Tomate"]


//? Objetos -> Coleção de Atributos
let pessoa = {
    nome: "Fulano",
    idade: 0
}
pessoa.nome  //"Fulano"
pessoa.idade //0


//? Unindo os dois temos listas de objetos
let posts = [
    {autor: "Ulísses", titulo: "Como ficar rico", idade: 20},
    {autor: "Nathália", titulo: "Como não ficar pobre", idade: 19},
    {autor: "Emílio", titulo: "Como ficar sem fome", idade: 22},
    {autor: "Caio", titulo: "Arrasta pra cima", idade: 34},
    {autor: "Thaís", titulo: "Como arrastar para cima?", idade: 77}
]

let postsFormatados = posts.map(post => {
    return {
        autor: post.autor + ' - ' + post.idade,
        titulo: post.titulo
    }
})
/*
postsFormatados = [
    {autor: "Ulísses - 20", titulo: "Como ficar rico"},
    {autor: "Nathália - 19", titulo: "Como não ficar pobre"},
    {autor: "Emílio - 22", titulo: "Como ficar sem fome"},
    {autor: "Caio - 34", titulo: "Arrasta pra cima"},
    {autor: "Thaís - 77", titulo: "Como arrastar para cima?"}
]
*/


/**
 *  ====================================
 *  Programação Assíncrona no Javascript
 *  ====================================
*/
//? Promisses
// Pending: Estado Inicial
// Settled: Operação não-pending
// ↓↓ ↓↓ ↓↓
// Fulfilled: Operação bem sucedida
// Rejected:  Operação falha

async function getPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    const jsonData = await response.json();
    return jsonData;
}
/*
    fetch(...).then(...).then(...).catch(...).finally(...)
*/


//? Uso de Callbacks para funções assíncronas
function alteraDadosUsuario(id, novaSenha) {
    buscaUsuario(id, (usuario) => {
        usuario.senha = novaSenha;
    })
}

async function alteraDadosUsuario(id, novaSenha) {
    let usuario = await buscaUsuario(id)
    usuario.senha = novaSenha;
}