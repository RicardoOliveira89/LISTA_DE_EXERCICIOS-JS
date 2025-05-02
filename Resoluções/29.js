/*Escreva um programa que leia o número total de questões existentes em uma prova e
o número de questões que um candidato acertou e determine o seu percentual de
acertos e o seu percentual de erros*/

let quantidadeQuestoes = 80
let quantidadeAcertos = 41
let percentualAcerto = calcularPercentual(quantidadeQuestoes, quantidadeAcertos)
let percentualErro = calcularPercentual(quantidadeQuestoes, quantidadeQuestoes - quantidadeAcertos)

console.log(`Quantidade total de questões: ${quantidadeQuestoes}`)
console.log(`Acertou ${quantidadeAcertos} questões - Percentual de ${percentualAcerto.toFixed(1)}% de acertos`)
console.log(`Errou ${quantidadeQuestoes - quantidadeAcertos} questões - Percentual de ${percentualErro.toFixed(1)}% de erros`)

function calcularPercentual(num1, num2){
    return percentual = (num2 / num1) * 100
}