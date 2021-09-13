function nicknameMap(persons) {
  return persons.map((person) => `${person.name} - ${person.age}`) /* -- MAP -- è un metodo che permette di applicare la stessa funzione a tutti gli elementi dell’array. In questo caso sto dicendo che per ogni person di persons vengano aggiunti (in un array a parte) il nome e l'età separati da un '-' */
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

const nicknames = nicknameMap(persons);

console.log(persons);
console.log(nicknames);