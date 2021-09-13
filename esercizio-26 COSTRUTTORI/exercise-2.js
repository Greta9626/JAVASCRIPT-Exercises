function Person(firstName, lastName) { /* viene indicato con la lettera maiuscola per capire da subito che si tratta di un costruttore */
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return `${firstName} ${lastName};`
  } // utilizziamo le classi con i costruttori per rendere tutto più semplice.
} 
// -- con il costruttore possiamo creare la clonazione di una struttura di un oggetto e cambiare gli argomenti successivamnete quando ci servirà. --

let john = new Person('John', 'Doe'); //assegnamo una all'oggetto clonato una nuova classe e cambiamo i paramentri
let simon = new Person('Simon', 'Collins');

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins