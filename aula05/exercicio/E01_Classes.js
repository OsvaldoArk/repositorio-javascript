class Pessoa{
    nome;
    idade;
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Funcionario extends Pessoa{
    funcao;

    constructor(nome,idade,funcao){
        super(nome,idade);
        this.funcao = funcao;
    }
}


let p1 = new Pessoa("Andrey",21);
let f1 = new Funcionario("Audrey",19,"Coordenadora");

console.log(p1.nome);

console.log(p1);
console.log(f1);