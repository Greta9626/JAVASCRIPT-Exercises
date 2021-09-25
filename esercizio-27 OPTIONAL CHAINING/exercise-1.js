const person = {
  firstName: 'John',
  lastName: 'Doe'
  /* address: {
    city: 'Milan',
  }, */

  /* fullName: function () {
    return `${this.firstName} ${this.lastName}`
  } */
  };

console.log(person?.address?.city); // Argh! Cannot read property 'city' of undefined
console.log(person?.fullName?.()); // Argh! Cannot read property 'fullName()' of undefined

/* -- L'operatore OPTIONAL CHAINING "?" prevede che se l'espressione a sinistra è null o undefined, allora l'espressione a destra non viene più valutata e viene restituito null proteggendoci così da errori. -- */

/* Continua a darmi person?.fullName is not a function, quindi aggiungere il ?. prima delle parentesi dell argomento*/