import leia from 'readline-sync';

let n;
let npar = 0;
let nimpar = 0;

for (let i = 0; i < 10; i++) {
    n = leia.questionInt('Digite um numero: ');

    if (n % 2 === 0){
        npar = npar + 1;
    } else {
        nimpar = nimpar + 1;
    }
}

console.log('Quantidade de números pares: ' + npar);
console.log('Quantidade de números ímpares: ' + nimpar);