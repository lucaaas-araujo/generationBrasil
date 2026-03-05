import leia from 'readline-sync';

let continuar = true;
let somaPositivos = 0;

do {
    let n = leia.questionInt('Digite um numero: ');

    if (n === 0){
        continuar = false;
    }else if (n > 0){
        somaPositivos = somaPositivos + n;
    }
} while (continuar);

console.log(` A soma dos números positivos é: ${somaPositivos}`);