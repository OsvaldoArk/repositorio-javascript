class Livro{

    #titulo
    #autor
    constructor(titulo,autor){
        this.#titulo = titulo;
        this.#autor = autor;
    }

    get titulo(){
        return this.#titulo;
    }

    set titulo(titulo){
        this.#titulo = titulo;
    }
}

const livro = new Livro("Ensaio sobre a cegueira","José Saramago");

livro.titulo = "Blindness";

console.log(livro);

console.log(livro.titulo);