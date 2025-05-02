/*  
26. Escreva um programa que leia o peso e a altura dos atletas das quatro duplas que vão
    participar de um torneio de vôlei de praia e calcule o peso e a altura média de cada
    dupla e o peso e a altura média de todos os jogadores do torneio.
*/

//Altura dos atletas

let alturaAtleta1TimeA = 1.80;
let alturaAtleta2TimeA = 1.75;

let alturaAtleta1TimeB = 1.87;
let alturaAtleta2TimeB = 1.84;

let alturaAtleta1TimeC = 1.88;
let alturaAtleta2TimeC = 1.78;

let alturaAtleta1TimeD = 1.85;
let alturaAtleta2TimeD = 1.79;

// Peso dos atletas 

let pesoAtleta1TimeA = 80;
let pesoAtleta2TimeA = 78;

let pesoAtleta1TimeB = 83;
let pesoAtleta2TimeB = 76;

let pesoAtleta1TimeC = 77;
let pesoAtleta2TimeC = 83;

let pesoAtleta1TimeD = 84;
let pesoAtleta2TimeD = 80;

// Calculando o peso médio e a altura média de cada dupla

let alturaMediaTimeA = (alturaAtleta1TimeA + alturaAtleta2TimeA) / 2;
let pesoMedioTimeA = (pesoAtleta1TimeA + pesoAtleta2TimeA) / 2;
console.log("Altura média do Time A: " + alturaMediaTimeA.toFixed(2) + "m" + "\n" + 
"Peso médio do Time A: " + pesoMedioTimeA + "Kg" + "\n");

let alturaMediaTimeB = (alturaAtleta1TimeB + alturaAtleta2TimeB) / 2;
let pesoMedioTimeB = (pesoAtleta1TimeB + pesoAtleta2TimeB) / 2;
console.log("Altura média do Time B: " + alturaMediaTimeB.toFixed(2) + "m" + "\n" + 
"Peso médio do Time B: " + pesoMedioTimeB + "Kg" + "\n");

let alturaMediaTimeC = (alturaAtleta1TimeC + alturaAtleta2TimeC) / 2;
let pesoMedioTimeC = (pesoAtleta1TimeC + pesoAtleta2TimeC) / 2;
console.log("Altura média do Time C: " + alturaMediaTimeC.toFixed(2) + "m" + "\n" + 
"Peso médio do Time C: " + pesoMedioTimeC + "Kg" + "\n");

let alturaMediaTimeD = (alturaAtleta1TimeD + alturaAtleta2TimeD) / 2;
let pesoMedioTimeD = (pesoAtleta1TimeD + pesoAtleta2TimeD) / 2;
console.log("Altura média do Time D: " + alturaMediaTimeD.toFixed(2) + "m" + "\n" + 
"Peso médio do Time D: " + pesoMedioTimeD + "Kg" + "\n");

//Calculando o peso médio e a altura média de todos os atletas

let alturaMediaTotal = (alturaMediaTimeA + alturaMediaTimeB + alturaMediaTimeC + alturaMediaTimeD) / 4;
let pesoMedioTotal = (pesoMedioTimeA + pesoMedioTimeB + pesoMedioTimeC + pesoMedioTimeD) / 4;

console.log("Altura média de todos os atletas do torneio: " + alturaMediaTotal.toFixed(2) + "m" + "\n" + 
"Peso médio de todos os atletas do torneio: " + pesoMedioTimeD + "Kg");