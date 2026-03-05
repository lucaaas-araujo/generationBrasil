import leia from 'readline-sync';

let menor21 = 0;
let maior50 = 0;
let idade;

idade = leia.questionInt('Digite a idade: ')

while ( idade > 0) {

    if (idade < 21){
        menor21++;
    }
    if (idade > 50){
        maior50++;
    }
    idade = leia.questionInt('Digite a idade: ')
}

console.log(`Total de pessoas menores de 21 anos: ${menor21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maior50}`);