//SE(condição)? (bloco verdadeiro); (bloco falso) EXCEL
var nota = 10;
//verifica se a nota é válida e se o aluno passou
var passou = nota >= 0 && nota <= 10 && nota >= 7;

var resultado = passou ? 'o aluno foi aprovado':'o aluno foi reprovado';

console.log(resultado);  