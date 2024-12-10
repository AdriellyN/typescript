import readlinesync = require('readline-sync');

const numeros: Array<number> = new Array<number>();

numeros.push(7);
numeros.push(2);
numeros.push(5);
numeros.push(10);
numeros.push(7, 3);

for (let numero of numeros){
    console.log(numero);
}

numeros.push(readlinesync.questionFloat('Digite um numero: '));

numeros.unshift(2, 4.5, 8, 9);

console.table(numeros);

console.log("\nExiste o numero 5 no Array? ", numeros.includes(5));

console.log("\nQual o índice do numero 3 no Array? ", numeros.indexOf(3));

numeros.splice(numeros.indexOf(10), 1);

console.table(numeros);