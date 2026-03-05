import leia from 'readline-sync';

let continuar = true;

let idade;
let identidadeGenero;
let pessoaDev;

let totalBackend = 0;
let totalMulheresFrontend = 0;
let totalHomensMobile40 = 0;
let totalNaoBinarioFull30 = 0;

let totalPessoas = 0;
let somaIdades = 0;

while (continuar) {
    idade = leia.questionInt('Digite a idade: ');

    identidadeGenero = leia.questionInt('Digite a identidade de genero (1- Mulher Cis, 2- Homem Cis, 3- Nao Binario, 4-Mulher Trans, 5-Homem Trans, 6-Outros): ');

    pessoaDev = leia.questionInt('Pessoa Desenvolvedora (1- Backend, 2- Frontend, 3- Mobile, 4- FullStack): ');

    totalPessoas++;
    somaIdades += idade;

    if (pessoaDev === 1){
        totalBackend++;
    }

    if((identidadeGenero === 1 || identidadeGenero === 4) && pessoaDev === 2) {
        totalMulheresFrontend++;
    }

    if ((identidadeGenero === 2 || identidadeGenero === 5) && pessoaDev === 3 && idade > 40) {
        totalHomensMobile40++;
    }

    if (identidadeGenero === 3 && pessoaDev === 4 && idade < 30) {
        totalNaoBinarioFull30++;
    }
    
    continuar = leia.keyInYN('Deseja continuar?: ');

    if (!continuar) {
        break;
    }
}

let mediaIdade = somaIdades / totalPessoas;

console.log(`Total de pessoas desenvolvedoras Backend: ${totalBackend}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${totalMulheresFrontend}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${totalHomensMobile40}`);
console.log(`Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${totalNaoBinarioFull30}`);
console.log(`Total de pessoas que responderam: ${totalPessoas}`);
console.log(`Média de idade: ${mediaIdade.toFixed(2)}`);

