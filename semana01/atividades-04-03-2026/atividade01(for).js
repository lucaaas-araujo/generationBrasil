import leia from 'readline-sync';

let n1 = leia.questionInt('Digite o primeiro numero: ');
let n2 = leia.questionInt('Digite o segundo numero: ');

if (n1 >= n2) {
    console.log(`Intervalo Invalido!`)
} else {
    console.log(`Números entre ${n1} e ${n2}:`);
    for (let i = n1; i <= n2; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} é múltiplo de 3 e 5.`);
        }
    }
}