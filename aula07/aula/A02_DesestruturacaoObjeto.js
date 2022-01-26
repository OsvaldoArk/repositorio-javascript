const objeto = {
    nome:"Gabrielle",
    idade:"21",
    email:"gabrielle@email.com",
    telefone:"98888-7777"
}

const {nome,idade,...atributos} = objeto;

console.log(nome);
console.log(idade);
console.log(atributos);
//percorrendo um objeto e pegando os valores dos seus atributos.
for(let keys in objeto){
    console.log(keys+" - "+objeto[keys])
}
//cria um vetor com os atributos do objeto.
console.log(Object.keys(objeto));
