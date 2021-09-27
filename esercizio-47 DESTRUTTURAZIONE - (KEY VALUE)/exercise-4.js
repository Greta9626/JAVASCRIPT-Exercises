const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// per ogni chiave e valore dell'oggetto person, stampa la chiave e il valore:
for (let [key, value] of Object.entries(person)) {
  // OBJECT.ENTRIES(PERSON) mi torna un array con dentro tanti array quanto sono gli elementi dell oggetto passato: [['id', '1'], ['firstName', 'Mario'], ['lastNAme', 'Rossi'], ['age', '25']]. con key e value mi prende i singoli chiave e valore dell'array
  console.log(`${key}: ${value}`);
}
