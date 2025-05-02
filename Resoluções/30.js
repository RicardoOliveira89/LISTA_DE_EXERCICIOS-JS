/*Escreva um programa que leia os valores das coordenadas X e Y e dois pontos P e Q e
determine a distância entre estes dois pontos. A distância entre dois pontos pode ser
determinada através da distância euclidiana.*/

let xP = 3
let yP = 4
let xQ = 7
let yQ = 1

let distancia = calcularDistancia(xP, yP, xQ, yQ)

function calcularDistancia(x1, y1, x2, y2){
    let coordX = Math.pow(x1 - x2, 2) 
    let coordY = Math.pow(y1 - y2, 2)
    let distancia = Math.sqrt(coordX + coordY, 2)
    return distancia
}

console.log(`A distância entre P(${xP}, ${yP}) e Q(${xQ}, ${yQ}) é aproximadamente ${distancia.toFixed(0)}`)