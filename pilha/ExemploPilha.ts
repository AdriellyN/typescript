import {Stack} from "./Stack";

const pilha = new Stack<string>();

//Insere elementos na pilha
pilha.push("prato azul");
pilha.push("prato verde");
pilha.push("prato vermelho");

//Imprime a pilha
pilha.printStack();

console.log(pilha.contains("prato branco"));

//Remove o último elemento da pilha
pilha.pop();

pilha.printStack();
