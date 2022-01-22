contador = 0;

somador = 0;

while(contador<=200){
    if(contador % 2 ==0)
        somador+=contador;
    contador++;    
}

/*
while(contador<=200){

    somador+=contador;

    contador+=2;    
}
*/
console.log(somador);