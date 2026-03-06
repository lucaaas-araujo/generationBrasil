import readlinesync from "readline-sync";

const cores = new Set<string>();
const limite = 5;

for(let i = 0; i < limite; i++){
    const cor = readlinesync.question("Digite uma cor: ");
    cores.add(cor);
}

console.log("Listar todas as cores:")

for (const cor of cores){
    console.log(cor)
}

console.log("Ordenar as cores: ")
for(const cor of [...cores].sort()){
    console.log(cor);
}
