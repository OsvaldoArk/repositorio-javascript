import {Pessoa} from "./Pessoa.js";

export class Aluno extends Pessoa{

    #turma
    constructor(nome,idade,turma){
        super(nome,idade);

        this.#turma = turma;
    }

    get turma(){
        const turma = this.#turma;
        return turma;
    }
}