function greet(greeting) {
  return name => (`${greeting}, ${name}`) /* al parametro name passo Greta */
}

const greetWithHello = greet('Hello');
const greetWithBye = greet('Bye');
const greetWithHi = greet('Hi');

console.log(greetWithHello('Greta')); /* console log della funzione e sostituisco il parametro name */
console.log(greetWithBye);
console.log(greetWithHi);



/* const greetPaulWithHello = greetWithHello('Paul');
const greetPaulWithHi = greetWithHi('Paul');
const greetJohnWithBye = greetWithBye('John');
const greetSimonWithHello = greetWithHello('Simon');

console.log(greetPaulWithHello);
console.log(greetPaulWithHi);
console.log(greetJohnWithBye);
console.log(greetSimonWithHello); */