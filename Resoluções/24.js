// 24. Escreva um programa que leia o termo inicial e a razão de uma progressão aritmética e
// imprima os 5 primeiros termos desta progressão.

let termoInicial = 2;
let razao = 3;
let numeroTermos = 5;
let progressao = 0;

for (let i = termoInicial; progressao < numeroTermos; i = termoInicial += razao) {
    progressao ++;
    console.log(i);   
}
