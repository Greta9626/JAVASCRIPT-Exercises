const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

/* const id = person.id;
const personInfo = {
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age
}; */

let { id, ...personInfo } = person; //rest raggruppa personInfo in un oggetto a parte rispetto id
// sto creando una variabile che si chiama id e una personInfo a cui assegno i valori dell'oggetto person (anzichè fare 'const id = person.id')

console.log(id, personInfo); 