/* function isAdult({ age }) { //per selezionare direttamente age all'interno di person, senza dover scrivere person.age dopo il return
  return age >= 18;
} */
/* 
function isAdult(person) {
  const { age } = person; 
  return age >= 18;
}
*/

isAdult = ({age}) => {
  return age >= 18
}

 const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};



console.log(isAdult(person));