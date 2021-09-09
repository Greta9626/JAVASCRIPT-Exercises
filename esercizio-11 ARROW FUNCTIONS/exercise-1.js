/* in una funzione anonima si può implementare l'arrow function riducendo al minimo la funzione senza parola chiave function, parentesi graffe e return  */

/* una situazione del genere con l'arrow function diventa: */

/* const sum = function (a, b) {
  return a + b;
} */

const sum = (a,b) => a + b;


/* -----nel caso in cui la funzione presenta un solo parametro possiamo omettere le parentesi tonde: */

/* const log = function (value) {
  console.log(value);
} */

const log = value => console.log(value)


log(sum(2, 5));

/* note: se la funzione non prevede alcun paramentro, è obbligatorio l'uso delle tonde. */