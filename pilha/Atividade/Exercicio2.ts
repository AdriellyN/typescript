import readlinesync = require('readline-sync');
import {Stack} from "./Stack";

const livro = new Stack<string>();

let opcaoMenu;

do{
    console.log("\n******************************************\n");
    console.log("\t1 - Adicionar Livro na pilha");
    console.log("\t2 - Listar todos os Livros ");
    console.log("\t3 - Retirar Livro da pilha ");
    console.log("\t0 - Sair \n");
    console.log("******************************************");
    
    opcaoMenu = readlinesync.questionInt("\nEntre com a opcao desejada: ");

    switch(opcaoMenu){
        case 1:
            livro.push(readlinesync.question("\nDigite o nome: "));
            console.log("\Pilha:\n")
            livro.printStack();
            console.log("\nLivro Adicionado!\n");
            break;
        case 2:
            console.log("\nLista de Livros na pilha: \n")
            livro.printStack();
            break;
        case 3:
            if(livro.count() <= 0){
                console.log("A Pilha está vazia!");
            } 
            else{
            livro.pop();
            livro.printStack();
            console.log("\nUm Livro foi retirado da pilha!");
            }
            break;
        case 0:
            console.log("Programa Finalizado!");
            process.exit(0);
        default:
            console.log("Opção inválida!")
    }

}while(opcaoMenu >= 0)