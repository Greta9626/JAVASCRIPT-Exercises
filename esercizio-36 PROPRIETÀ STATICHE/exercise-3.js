class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromObject(dati) {
    let oggettoPersona = new Person(dati.firstName, dati.lastName);
    return oggettoPersona;
  } //creo il metodo statico a cui passo i valori dell'oggeto obj
}

/* --A CHE SERVONO I METODI STATIC-- all'interno di una classe possiamo creare dei valori che non possono essere passati alle istanze ma possono essere ereditate dalle classi figlio (extends) */

const obj = {
  firstName: 'Mario',
  lastName: 'Rossi'
}; //consente di passare i valori all'interno dell'oggetto nel metodo statico(in questo caso lo passo al paramentro dati)

const person = Person.fromObject(obj);
console.log(`${person.firstName} ${person.lastName}`);