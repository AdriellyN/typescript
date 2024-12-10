import readlinesync = require('readline-sync');
import { Queue } from './Queue';

const fila = new Queue<string>();

let opcaoMenu;

do{
    console.log("\n******************************************\n");
    console.log("\t1 - Adicionar Cliente na Fila");
    console.log("\t2 - Listar todos os Clientes ");
    console.log("\t3 - Retirar Cliente da Fila  ");
    console.log("\t0 - Sair \n");
    console.log("******************************************");

    opcaoMenu = readlinesync.questionInt("\nEntre com a opcao desejada: ");

    switch(opcaoMenu){
        case 1:
            fila.enqueue(readlinesync.question("\nDigite o nome: "));
            console.log("\nFila:\n")
            fila.printQueue();
            console.log("\nCliente Adicionado!\n");
            break;
        case 2:
            console.log("\nLista de Clientes na Fila: \n")
            fila.printQueue();
            break;
        case 3:
            if(fila.count() <= 0){
                console.log("A Fila está vazia!");
            } 
            else{
            fila.dequeue();
            fila.printQueue();
            console.log("\nO Cliente foi Chamado!");
            }
            break;
        case 0:
            console.log("Programa Finalizado!");
            process.exit(0);
        default:
            console.log("Opção inválida!")
    }

}while(opcaoMenu >= 0)