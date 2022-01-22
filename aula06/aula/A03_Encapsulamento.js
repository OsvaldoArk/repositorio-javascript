class Livro{

    constructor(titulo,autor){
        this._titulo = titulo;
        this._autor = autor;
    }

    get titulo(){
        return this._titulo;
    }

    set titulo(titulo){
        this._titulo = titulo;
    }
}

const livro = new Livro("Ensaio sobre a cegueira","José Saramago");

livro.titulo = "Blindness";

console.log(livro);

console.log(livro.titulo);