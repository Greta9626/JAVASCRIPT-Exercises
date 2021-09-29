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
  return new Promise((resolve) => {//questo è l'esecutore, questa funzione viene eseguita automaticamente. ha due paramentri solitamente: resolve(value) se il processo termina correttamente, e reject(error) se si verifica un errore.
    setTimeout(() => resolve(persons.find( person => person.id === id)), 1000) 
  })
}

fetchPersonById(2).then(person => console.log(person)) //il valore che mi restituisce la promise, sia resolve che reject, lo prende il then

/* L’oggetto promise restituito ha le seguenti proprietà interne:

state — inizialmente “pending”, poi cambia in “fulfilled” se viene invocato resolve o in “rejected” se viene invocato reject.
result — inizialmente undefined, poi cambia in value se viene invocato resolve(value) o in error se viene invocato reject(error). */