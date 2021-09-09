function getKeys(obj) /* parametro placeholder che poi verrà sostituito da persone (l'oggetto in questo caso) */ {
  let personArray = [];

  for (item in obj) { /* for of va usato solo per gli array perché sono iterabili (ciclabili) prendendo l'elemento, il for in, invece, può essere usato per oggetti o array. negli array prende l'indice*/
    personArray.push(item);
  }
  return personArray;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);