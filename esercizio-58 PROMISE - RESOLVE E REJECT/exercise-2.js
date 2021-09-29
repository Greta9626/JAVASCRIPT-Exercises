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
    const trova = persons.find(person => person.id === id);
    if(trova) {
      resolve(trova);
    } else {
      reject('questa persona non esiste');
    }

  });
}

/* -- COSA HO FATTO -- creo una variabile a cui passo il metodo find (ovvero se riesce a trovarmi un valore altrimenti se non lo trova è null) così che passo direttamente il valore all'if (se true o false (cioè null)).
se è true esegue il resolve(fa uscire dalla promise il valore passato che poi verrà preso dal .then),
altrimenti esegue il reject(che passa al .catch la stringa dell'errore) */


/* il resolve e il reject fanno uscire entrambi il valore dalla promise che di conseguenza verrà poi preso dal .then o dal .catch */

fetchPersonById(2)
.then((person) => console.log(person)) //prendo i valori del resolve
.catch((err) => console.error(err)) //prendo i valori del reject
.finally(() => console.log('questo è il finally')) //una volta finita la promise viene eseguite, indipendemente dal risultato
 