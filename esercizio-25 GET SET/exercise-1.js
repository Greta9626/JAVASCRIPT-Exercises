const person = {
  get firstName() {
    return this.realFirstName;
  }, /* con get firstName andiamo a dichiarare il getter che serve a impostare la proprietà realFirstName */

  get lastName() {
    return this.realLastName;
  }, 

  set firstName(value) {
    this.realFirstName = value;
  }, /* qui settiamo il value di realFirstName che successivamente prenderà il valore di John e Simon */

  set lastName(value) {
    this.realLastName = value;
  },

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  } /* con questo metodo tornano le due proprietà precedentemente assegnate */
}

let john = Object.create(person); /* object.create crea un clone dell'oggetto person e posso modificare i valori in john senza replicarli su person */

john.firstName = 'John';
john.lastName = 'Doe'; /* andiamo a sostituire i valori a value nell oggetto john appena creato prendendolo come argomento */

let simon = Object.create(person);
simon.firstName = 'Simon';
simon.lastName = 'Collins';

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins