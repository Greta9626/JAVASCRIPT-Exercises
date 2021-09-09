function nicknameMap(persons) {
  const nicknamesArray = [];

  for (elem of persons){
    nicknamesArray.push(`${elem.name}-${elem.age}`);
    /* il push inserisce gli elementi dentro un array */
  }

  return nicknamesArray;
  /* return blocca/termina la funzione e fa uscire il valore. es: l'array nicknamesArray (lo tiene in memoria il pc) */
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

const nicknames = nicknameMap(persons); /* assegno la funzione alla variabile, quando verrà chiamata alla riga 24 avrà quel valore */
/* console.log(persons); */
console.log(nicknames);

/* template literals= backtick ``, permettono di inserire in una stringa delle funzioni e variabili `${persons}-${}`
è un altro tipo di quotes oltre '' e "".*/



/* creare un array dentro la funzione per portare dentro gli elementi che ci servono */

