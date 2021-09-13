/* METODO FILTER */

function adultFilter(persons) {
  return persons.filter((person) => person.age >= 18) /* filter ci permette di filtrare elementi di un array, come in questo caso numeri maggiori o uguali a 18. 
  non sostituisce l array ma ne crea uno nuovo che in questo caso assegnamo alla funzione che in seguito verrà assegnata ad adults*/
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

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);