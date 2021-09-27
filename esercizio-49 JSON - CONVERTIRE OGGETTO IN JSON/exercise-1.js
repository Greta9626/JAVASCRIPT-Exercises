class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  json() {
    return JSON.stringify(this)
  }
}


const developer = new Person(1, 'Mario', 'Rossi', 25);
console.log(developer.json());

/* JSON (Javascript Object Notation) è un modo di passare i dati molto simile agli oggetti di js, quando passiamo json in realtà stiamo passando una stringa(text-based), che verrà poi parsata(pars) trasformandola in quelli che sono i dati effettivi.
ha solo proprietà ma non metodi, passiamo esclussivamente dei dati (array, oggetti, stringhe, numeri, boolean)
altra differenza usiamo solo double quotes "" e non singole ''.

--COME OTTENERE UN JSON DA INSERIRE IN JS--
let requestURL = './codice.json';
let request = new XMLHttpRequest(); //suggerita da js
request.open('GET', requestURL);
request.responseType = 'Json'; //da qui trasformiamo il json in oggetto
request.send();

request.onload = function() { //onload è un evento: aspetta la risposta delle richiesta. abbiamo fatto una funzione anonima
  const classe = request.responde;
  console.log(classe.insegnanti[1])
}

--PER TRASFORMARE UN OGGETTO IN JSON--
let json = JSON.stringify(hero);

hero.weapons.toJSON = function() {
  return this.primary; <-- se vogliamo ritornare solo il valore di una proprietà
}

ci sono alcune proprietà che vengono scartate: proprietà: undefined, quelle di tipo symbol, e le funzioni dato che non possono essere tradotte in testo visto che non hanno nessun valore 

--CONVERTIRE UNA STRINGA IN JSON--
const newHero = JSON.parse(json); <-- passiamo una stringa così da convertirla in formato json*/