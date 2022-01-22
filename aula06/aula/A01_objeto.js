class Pessoa{
    nome;
    idade;
    
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.populacao++;
    }

    dizerOla(){
        console.log(`Olá meu nome é: ${this.nome}`);
    }

    static identifica(){
        console.log("Classe: Pessoa\nAtributos: ',idade\nMétodos: dizerOla()");
    }
    static getPopulacao(){
        this.populacao;
    }
}

//instanciando um objeto
const p1 = new Pessoa("Roberto",36);
const p2 = new Pessoa("Luana",28);
const sala = [];
//p1.dizerOla();

console.log(Object.prototype.toString.call(sala));



