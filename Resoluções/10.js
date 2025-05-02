// 10. Escreva um programa que leia o valor dos dois catetos de um triângulo retângulo e
// calcule o valor da hipotenusa.

let cateto1 = 3;
let cateto2 = 2;

let hipotenusa = Math.sqrt((Math.pow(cateto1, 2) + Math.pow(cateto2,2)), 2);

console.log("\nHipotenusa = " + hipotenusa.toFixed(1) +"\n");