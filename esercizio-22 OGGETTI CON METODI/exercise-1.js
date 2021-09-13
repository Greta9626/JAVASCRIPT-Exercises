const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  job: 'Web Developer',

  fullName: function() {
    let name = `${person.firstName} ${person.lastName}`;
    return name;
  },
  info: function() {
    let informazioni = `${person.firstName} ${person.lastName}, ${person.age} ${person.job}`;
    return informazioni;
  }
}

console.log(person.fullName()); // John Doe
console.log(person.info()); // John Doe, 25 - Web Developer