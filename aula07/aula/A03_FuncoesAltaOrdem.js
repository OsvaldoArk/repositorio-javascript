function multiplica(multiplicador){

    return function (valor){
        return valor * multiplicador;
    }
}

const dobro = multiplica(2);
const triplo = multiplica(3);
const quintuplo = multiplica(5);

console.log(dobro(10));
console.log(triplo(10));
console.log(quintuplo(10));