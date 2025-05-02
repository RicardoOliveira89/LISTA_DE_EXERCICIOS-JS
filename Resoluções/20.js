// 20. Em uma determinada cidade, cada m2 de um terreno está avaliado em R$ 300,00.
// Escreva um programa que leia o comprimento e a largura de um terreno localizado
// nesta cidade e calcule o seu valor de mercado.

const metroQuadrado = 300;

let comprimento = 35;
let largura = 20;

let valorMercado = (comprimento * largura) * metroQuadrado;

console.log("\nValor de Mercado do imóvel: R$" + valorMercado.toFixed(2) + "\n");