import readlinesync = require('readline-sync');

const arrayCores: Array<String> = new Array<String>(5);

for(let indice = 0; indice < arrayCores.length; indice++){
    arrayCores[indice] = readlinesync.question("Digite uma cor: ");
}

console.table(arrayCores);

console.log("Lista ordenada\n")
console.table(arrayCores.sort());