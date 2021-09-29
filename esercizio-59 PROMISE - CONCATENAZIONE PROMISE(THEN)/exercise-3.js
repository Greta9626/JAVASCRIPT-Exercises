const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);
      
      if (person) {
        return resolve(JSON.stringify(person));
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}

fetchPersonById(2)
//.then((person) => console.log(JSON.parse(person))) <- per avere il risultato senza concatenazione 
.then((personJson) => JSON.parse(personJson)) //il primo then passa il valore al secondo then (in questo caso passa il parse del json)
.then((person) => console.log(person)) //console.log dell oggetto della persona senza essere stringato 
.catch((err) => console.error(err))