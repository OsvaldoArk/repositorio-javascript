
// arrays dinâmicos Pilha e Fila
//Pilha exemplo: pilha de pratos para lavar. FiLo (primeiro a entrar é o último a sair)
//adiciona o elemento no final do array
//vetor.push("claúdio");
//vetor.push("jéssica");
//retira o elemento do final do array.
//vetor.pop();
//vetor.pop();
//vetor.pop();
//vetor.pop();

//Fila exemplo: fila de banco. FiFo primeiro a entrar, primeiro a sair.
//adiciona o elemento no começo do array
//vetor.unshift("alberto");
//remove o primeiro elemento do array.
//vetor.shift();
//vetor.shift();
//retorna o tamanho do array.
//console.log(vetor.length);

// //console.log(vetor);
// //transforma um array em uma instring fazendo a concatenação através de um caractere escolhido.
// const lista = vetor.join(",");
// //transfora uma string em um array, separando através do caractere escolhido.
// const listaSeparada = lista.split(",");
// //inverte a posição dos elementos de um array.
// console.log(listaSeparada.reverse());
// //organiza o array em ordem alfabetica ou ordem crescente;
// console.log(listaSeparada.sort());

//console.log(listaSeparada.findIndex('maria'));
//desestruturação de vetor.
const vetor = ['ana','maria','ricardo','lara','joão'];

const [aluno1, aluno2,...resto] = vetor;

console.log(aluno1);
console.log(aluno2);
console.log(resto);



