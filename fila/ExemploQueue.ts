import readlinesync = require('readline-sync');
import { Queue } from './Queue';

const fila = new Queue<string>();

//Insere elementos na fila
fila.enqueue("Beatriz");
fila.enqueue("Gustavo");
fila.enqueue("Alana");

//Fila.enqueue(readlinesync.question("Digite o seu nome: "));

//Imprime os elementos da fila
fila.printQueue();

//Procura um elemento na fila
console.log(fila.contains("Alana"));

//Conta os elementos da fila
console.log(fila.count());

//Fila o primeiro elemento da fila (não dá para tirar um elemento específico)
fila.dequeue();
console.log("\nChamar: ", fila.dequeue());

fila.printQueue();

//Mostra o próximo elemento da fila 
console.log(fila.peek());
