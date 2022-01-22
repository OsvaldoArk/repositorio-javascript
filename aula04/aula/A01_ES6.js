//hoisting 
/*

// palavra chave let
console.log(fantasma);

let fantasma; 

for(let i=0;i<10;i++){
    console.log(i);
}

console.log(i)

//palavra chave const 
const palavra = "javascript";

palavra = "java";

//For of (melhorado)
const sala = ["Pedro","Tiago","João","Claúdio"];
let texto="";
//sala[2] = "Jacira"
//sala.push("David");
for(let pedaco of sala){
    if(pedaco==="João")
        pedaco="Jacira";
    texto+=" "+pedaco;
} 

console.log(texto);

//Default parameter
function ola(nome="Fulano"){
    console.log("Olá "+nome);
}

ola();

function quedaLivre(gravidade=10){
    ep = gravidade * 50 * 10;
    console.log(ep)
}

quedaLivre();

//Rest operator
function soma(...numeros){
    let somatorio = 0;
    for(let numero of numeros){
        somatorio+=numero;
    }
    console.log(somatorio);
}

soma(2,4,6,8,10,12,14);

//Includes
let text = "Hello world, welcome to the universe.";
console.log(text.includes("welcome"));

function verifica(){
    const palavras = text.split(" ");

    for(let palavra of palavras){
        if(palavra==="welcome")
            return true;    
    }

    return false;
}


console.log(verifica());
//palavra chave Key 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}

console.log(text);

//Arrow function
const quadrado = num => Math.pow(num,2);

function exponencial(num){
    return Math.pow(num,2);
}


console.log(quadrado(30));
*/