const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

/* const id = person.id;
const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
 */

/* const { id } = person;
const { firstName } = person;
const { lastName } = person;
const { age } = person;
 */
const {id, firstName, lastName, age} = person;
console.log(id, firstName, lastName, age);

/* la destrutturazione degli oggetti funziona in maniera analoga a quella degli arrey ma con delle differenze:
- si utilizzano le parentesi graffe;
- vengono assegnati i valori per naming: name = name, anche se la posizione è differente;
- nel caso in cui non volessimo dichiarare le nostre variabili ma le vorremmo destrutturare o popolare non si potrà fare in questo modo: {surname, name} = user2construct ma si dovranno aggiungere le (). quindi: ({surname, name} = user2construct) */