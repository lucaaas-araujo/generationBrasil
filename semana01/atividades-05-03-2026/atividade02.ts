import readlineSync from "readline-sync";

const numeros = new Set<number>();
const limite = 10;

for (let i = 0; i < limite; i++) {
    const numero = readlineSync.questionInt("Digite um numero: ");
    numeros.add(numero);
}

console.log("Listar dados do Set:");

for (const num of [...numeros].sort((a, b) => a - b)) {
    console.log(num);
}