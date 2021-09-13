function calculateAverageAge(persons) {
  const ageAverage = persons.reduce((average, person) => {
    return average + person.age; 
  }, 0); 
  
  /*il metodo -- REDUCE -- serve a ciclare l'Array 
  ha due parametri principali: il primo è il valore di ritorno dell'iterazione precedente, il secondo invece è l'elemento attuale (person1 person2 person3..).
  Ogni volta che viene eseguito un ciclo AVERAGE equivale alla somma del ciclo precedente (nel primo ciclo Average è prende il valore della prima person dell'Array: 16 + 17 = 33. 33 sarà average al secondo ciclo).
  Nel primo ciclo se non viene passato il valore iniziale (0) viene preso di base il primo elemento dell'array (person)
  in questo caso passiamo zero dato che il primo elemento è un oggetto e non direttamente un numero (non è age ma person)
  */

  return Math.round(ageAverage / persons.length);
  /* Math.round serve ad arrotondare il risultato finale */
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);