//23. Escreva um programa que leia o valor do raio de uma esfera e determine o seu volume.

let raio = 2;
let pi = 3.14;

let volume = (4/3) * pi * Math.pow(raio,3);

console.log("\nValor do raio: " + raio + "\nValor do volume: " + volume.toFixed(2));