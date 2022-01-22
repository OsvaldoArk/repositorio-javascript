var laco = true;
var escolha;

while(laco){
  escolha = prompt('escolha uma opcao a, b, c, d, ou 0 pra sair');

  switch(escolha){
      case 'a': console.log('novo documento'); 
              break;

      case 'b': console.log('abrir documento'); 
              break;

      case 'c': console.log('salvar documento'); 
              break;

      case 'd': console.log('salvar como...'); 
              break;
      case '0': laco = false; break;

      default: console.log('opção inválida');
  }
}

console.log('fim do laço');