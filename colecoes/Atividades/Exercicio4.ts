import readlinesync = require('readline-sync');

const numero: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

let comparacao = readlinesync.questionInt("Digite o numero que voce deseja encontrar: ");

let verdadeiro = numero.has(comparacao);

if (verdadeiro === true){
    console.log(`O número ${comparacao} foi encontrado!`);
}else{
    console.log(`O número ${comparacao} não foi encontrado!`);
}