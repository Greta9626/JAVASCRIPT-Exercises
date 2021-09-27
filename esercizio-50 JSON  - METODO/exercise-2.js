class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }

  static fromJson(oggettoJSON) {
    const datiOggetto = JSON.parse(oggettoJSON);
    const {id, firstName, lastName, age} = datiOggetto;
    const persona = new Person(id, firstName, lastName, age);
    return persona;
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);