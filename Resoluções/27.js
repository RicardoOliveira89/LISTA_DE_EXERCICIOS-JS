/*Escreva um programa que leia o comprimento e a largura de uma cisterna e a
quantidade de litros que o usuário deseja armazenar na mesma e determine quantos
metros ele deve encher a cisterna para obter a quantidade de litros desejada.*/

function calcularMetrosCubicos(comprimento, largura, altura) {
    return comprimento * largura * altura;
  }
  
  let comprimento = 5; 
  let largura = 3;   
  let litrosDesejados = 500; 
  
  let metrosCubicosNecessarios = litrosDesejados * 0.001;
  let alturaNecessaria = metrosCubicosNecessarios / (comprimento * largura);
  
  console.log(`\nPara armazenar ${litrosDesejados} litros, a cisterna deve ser preenchida até uma altura de aproximadamente ${alturaNecessaria.toFixed(2)} metros.`);