/* 25. Escreva um programa que leia um número inteiro N e imprima dos 10 primeiros
    elementos da sua tabuada. A saída do programa deve seguir o formato abaixo, que
    mostra os 5 primeiros elementos da tabuada do 2.
    1X2=2
    2X2=4
    3X2=6
    4X2=8
    5 X 2 = 10
    */

let numero = 3;
let resultado;

for(let i = 0; i < 11; i++) {
    resultado = i * numero;
    console.log(i + " x " + numero + " = " + resultado);
}