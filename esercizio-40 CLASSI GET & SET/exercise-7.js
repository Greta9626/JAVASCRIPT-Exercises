class Person {
  constructor (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get firstName() {
    return this._firstName; // il get quando dobbiamo leggere un dato (es. console.log(person.firstName))
    //metto l'underscore perché altrimenti quando lo richiamo nel setter, mi chiama il firstName del getter e va in loop
  }

  set firstName(name) { // il set serve quando assegnamo un valore alla variabile (es. person.firstName = 'Maria';)
    this._firstName = name;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(surname) {  
    this._lastName = surname;
  }

  get age() {
    return this._age;
  }

  set age(number) {
    this._age = number;
  }
  
  get fullName() {
    let fullName2 = `${this.firstName} ${this.lastName}`;
    return fullName2;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);
console.log(person.firstName);


person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.lastName);
console.log(person.fullName);