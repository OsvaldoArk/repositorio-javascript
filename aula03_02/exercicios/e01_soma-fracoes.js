//1+1/2+1/3+1/4 ... 1/100

contador = 1;
somador = 0;
while(contador<=100){

    somador += 1/contador;

    contador++;

}

console.log(somador)