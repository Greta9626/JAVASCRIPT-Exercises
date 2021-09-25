class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName
        }
    }
//all'interno delle classi utilizziamo un metodo chiamato costruttore, ed è il metodo che viene eseguito ogni volta che si crea una nuova istanza (es new Person). In pratica inizializza la classe a cui passeremo i paramentri. All'interno dei parametri del costruttore potremmo anche indicare eventuali valori di default (es firstName = Mario)

/* function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
} */

const developer = new Person('Mario', 'Rossi'); //qui creiamo una nuova istanza alla quale verranno assegnati i parametri che ci servono
console.log(`${developer.firstName} ${developer.lastName}`);