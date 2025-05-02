// 21. Escreva um programa que leia o preço de produção de um determinado produto e a
// margem de lucro desejada pelo fabricante e calcule qual deve ser o seu preço de venda.

let precoProducao = 100;
let margemLucroFabricante = 25;

let precoVenda = (((precoProducao * margemLucroFabricante) / 100) + precoProducao);

console.log("\nPreço de produção: R$ " + precoProducao.toFixed(2) + "\nMargem de lucro: " + margemLucroFabricante + " %" + "\nPreço de venda do produto: R$ " + precoVenda.toFixed(2));