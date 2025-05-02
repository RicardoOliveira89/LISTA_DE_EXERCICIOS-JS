// 2. Escreva um programa que leia três números e seus respectivos pesos e calcule a sua média ponderada.

let num1 = 5;
let num2 = 8;
let num3 = 7;

let peso1 = 0.5;
let peso2 = 1;
let peso3 = 2;

let mediaPonderada = ((num1 * peso1) + (num2 * peso2) + (num3 * peso3)) / (peso1 + peso2 + peso3);

console.log(mediaPonderada.toFixed(1));