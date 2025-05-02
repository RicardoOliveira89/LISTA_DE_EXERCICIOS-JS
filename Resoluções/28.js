/*Uma loja oferece três formas de pagamento para os seus clientes. Caso a compra seja
paga à vista, a loja oferece um desconto de 10%. Caso a compra seja paga em três
parcelas no cartão de crédito, o cliente paga o preço original (sem descontos, mas sem
juros) da compra. Caso a compra seja paga em dez parcelas no cartão de crédito, a loja
acrescenta uma taxa de juros de 20% sobre o valor da compra. Todas as dez parcelas
tem exatamente o mesmo valor. Com base nestas informações, escreva um programa
que leia o valor da compra de um cliente e informe: o valor da compra se ela for paga
à vista, o valor de cada parcela se a compra for paga no cartão e em três parcelas (por
exemplo, 3 parcelas de R$ 50,00) e o valor de cada parcela se a compra for paga na
cartão de crédito e em dez parcelas.*/

let valorCompra = 900
let descontoAVista = valorCompra - (valorCompra * 0.10)
let parceladoTresVezes = valorCompra / 3
let parceladoDezVezes = (valorCompra + (valorCompra * 0.20)) / 10

console.log(`Valor da compra: R$ ${valorCompra.toFixed(2)}`)
console.log(`Pagamento à vista: R$ ${descontoAVista.toFixed(2)}`)
console.log(`Pagamento parcelado: 3x de R$ ${parceladoTresVezes.toFixed(2)}`)
console.log(`Pagamento parcelado: 10x de R$ ${parceladoDezVezes.toFixed(2)}`)