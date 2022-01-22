/*class Autor{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const autor = new Autor("Alexandre Dummas",23);
*/

const autor = {
    nome:"Alexandre Dummas",
    idade: 23
}


class Livro{

    constructor(titulo,autor){
        this.titulo = titulo;
        this.autor = autor;
    }
}

const livro = new Livro("O conde de monte Cristo",autor);

console.log(livro);
console.log(livro.autor.nome);