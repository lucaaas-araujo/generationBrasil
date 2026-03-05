import leia from 'readline-sync';

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let n = leia.questionInt('Digite um numero: ');

let encontrado = false;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === n) {
        console.log(`O número ${n} está localizado na posição: ${i}.`);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log(`O número ${n} não foi encontrado!`);
}