const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const json = JSON.stringify(person, function (key, value) {
  if(typeof value === 'string') { //posso passare dentro un paramentro una funzione (come se passassimo il risultato della funzione) dicendo che tutti i valori di tipo stringa me li ritorna undefined e di conseguenza non verranno stampati nell oggetto JSON)
    return undefined
  }
  return value;
})

console.log(json); // Should return: { id: 1, age: 25 }
