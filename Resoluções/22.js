// 22. Escreva um programa que leia dois números inteiros A e B e determine o maior
// múltiplo de A que é menor ou igual a B. Por exemplo, o maior múltiplo de 3 menor ou
// igual a 50 é 48.

let numA = 3;
let numB = 25;
let multiplo;

for (let i = numA; i < numB; i+=3) {
    multiplo = i;
}
console.log("\nPrimeiro número: " + numA + "\nSegundo número: " + numB + "\nO maior múltiplo de " + numA + " que é menor ou igual a " + numB + " é o número " + multiplo);