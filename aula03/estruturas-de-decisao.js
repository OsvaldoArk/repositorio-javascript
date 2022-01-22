let nota = 7;

if(nota >= 0 && nota <=10){

    if(nota>=7){
        console.log('O aluno foi aprovado.')
    }else if(nota>=3){
        console.log('O aluno está de recuperação')
    }
    else{
        console.log('O aluno foi reprovado.')
    }

}else{

    console.log('nota inválida!');

}
if(nota==0)
    console.log('estude mais.');
