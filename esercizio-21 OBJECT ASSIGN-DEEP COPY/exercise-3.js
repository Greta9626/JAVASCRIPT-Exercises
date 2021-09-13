const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  address: {
    state: 'Italy',
    region: 'Lazio',
    city: 'Rome'
  }
};


const person2 = Object.assign(JSON.stringify(person1));
/* In questo caso con JSON usiamo il --DEEP COPY-- dato che abbiamo l'oggetto dentro un altro oggetto. In certe circostanze può essere necessario creare una copia profonda per evitare effetti collaterali.

--Con questa soluzione andiamo a convertire l'oggetto in una stringa e poi lo ritasformiamo in oggetto, creando appunto una copia profonda.-- la deep copy ha però delle limitaioni: molti tipi di oggetti non sono convertibili (Map, Set, Blob, FileList e in pratica tutti i tipi particolari che derivano da 'Object' */


person2.address.region = 'Lombardia';
person2.address.city = 'Milan';


console.log(person1);
console.log(person2);