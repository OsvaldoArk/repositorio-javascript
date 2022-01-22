class Pessoa{
    nome;
    idade;
    
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }

    dizerOla(){
        console.log(`Olá meu nome é: ${this.nome}`);
    }

    static identifica(){
        console.log("Classe: Pessoa\nAtributos: ',idade\nMétodos: dizerOla()");
    }
}

class Estudante extends Pessoa{

    constructor(nome,idade,turma){
        super(nome,idade);
        this.turma = turma;
    }

    static identifica(){
        console.log("Classe: Estudante\nAtributos: nome,idade,turma\nMétodos: dizerOla()");
    }
}

const estudante = new Estudante("Joaquim",30,"Javascript");

console.log(estudante);

estudante.dizerOla();

Estudante.identifica();