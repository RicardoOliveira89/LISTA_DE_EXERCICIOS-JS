// 13. Escreva um programa que leia um valor em KB e calcule o seu valor correspondente
// em bits, bytes, MB e GB.

let kilobyte = 1000;

let bits = kilobyte * 8000;
let bytes = kilobyte * 1000;
let megabyte = kilobyte / 1000;
let gigabyte = kilobyte / 1000000;

console.log("\nKilobyte: " + kilobyte + "\nbits: " + bits + "\nbytes: " + bytes + "\nmegabyte: " + megabyte + "\ngigabyte: " + gigabyte + "\n");