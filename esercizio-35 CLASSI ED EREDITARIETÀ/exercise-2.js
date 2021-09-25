class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Developer extends Person {
  constructor(firstName, lastName, role){ /* avremmo un costruttore con una struttura diversa, ma che grazie a super ci consentirà di chiamare la classe genitore (Person) e poi continuare ad aggiungere metodi e proprietà arricchendo quindi la classe figlia*/
    
    super(firstName, lastName) //anzichè usare Person.call(dato che è già presente con extend Person non ce n'è bisogno), utilizziamo super(sopra) utile per passare i paramentri dal costruttore figlio al genitore, ma ci da anche la possibilità di eseguire metodi all'interno della classe genitore

    //super passa i paramentri al costruttore padre, in questo caso Mario Rossi. se avessi messo (firstName, role) il costruttore avrebbe avuto i valori Mario Front-end
    this.role = role;
  }
}

const developer = new Developer('Mario', 'Rossi', 'Front-end');
console.log(`${developer.firstName} ${developer.lastName} - ${developer.role}`);