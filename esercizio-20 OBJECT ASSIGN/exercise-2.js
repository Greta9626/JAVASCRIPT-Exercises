const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = Object.assign({}, person1); //questo metodo consente di clonare un oggetto esistente e può rappresentate anche un altro modo per creare oggetti partendo da altri già esistenti.
//sintassi: Object.assign(target, ..sources), --TARGET-- è l'oggetto di destinazione, mentre --SOURCES-- sono gli oggetti di orgine (in questo caso person1)

person2.firstName = 'Simon';

console.log(person1);
console.log(person2);


/* 

let auto = {
marca: 'Fiat',
modello: '500',
anno: '2020',
};

Object.assign(auto, {
	modello: '500',
  anno: '2020'
})

console.log(auto) 

-- in questo esempio il target è auto e con object assign aggiungiamo il modello e l'anno ad auto. --

-- Poteva essere scritto anche in questo modo: --

let auto = {
  Marca: 'Fiat'
  };

let caratteristiche = {
  Modello: '500',
  anno: '2020'
};

Object.assign(auto, caratteristiche);

-- è possibile unire due oggetti in un unico target: --

let auto = {
  Marca: 'Fiat'
};

let caratteristiche = {
  Modello: '500'
};

let automobile = Object.assign({}, auto, caratteristiche);

console.log(automobile);
  
*/

