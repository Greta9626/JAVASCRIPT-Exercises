const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
  };

console.log(Object.keys(person)); 
/* 
-- Object.keys -- ci permette di stampare tutte le chiavi del nostro oggetto, non stampa chiavi all'interno di oggetti nidificati.
-- Object.values -- invece ci stampa tutti i valori e anche i paramentri completi su oggetti nidificati.
-- Object.entries -- stampa un array per ogni parametro dell'oggetto, anche oggetti al suo interno.
*/