export class Pessoa{
    #nome
    #idade

    constructor(nome,idade){
        if(this.constructor==Pessoa){
            throw new Error("Essa classe não pode ser instanciada.");
        }    
        this.#nome = nome;
        this.#idade = idade;
    }

    get nome(){
        const nome = this.#nome;
        return nome;
    }

    get idade(){
        const idade = this.#idade;
        return idade;
    }
}