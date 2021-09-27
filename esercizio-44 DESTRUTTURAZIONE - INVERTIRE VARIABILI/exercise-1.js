let num1 = 10;
let num2 = 20;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

//c'è un trucco per scambiare le variabili tramite l’assegnamento di destrutturazione: creiamo un array temporaneo con due varibili e lo destrutturiamo immediatamente invertendo l’ordine delle variabili.

// Variable swapping
[num1, num2] = [num2, num1];


/* let temp = num2;
num2 = num1;
num1 = temp; */

console.log('After swap: ', num1, num2); // After swap: 20 10

/* la destrutturazione consete agli array e oggetti di essre scomposti per prendere solo le parti che ci interessano e popolarne con i valori alcune variabili che andremmo a creare.

Viene chiamato “assegnamento di destrutturazione” perché “destruttura” copiando gli elementi all’interno di variabili. Ma l’array in sé non viene modificato.*/