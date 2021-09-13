const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

console.log(person2.firstName = 'Simon');

// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);

//viene modificato anche l'oggetto person1 perché con person2 stiamo effettivamente richiamano la funzione numero 1, e quindi le proprietà sono in comune.