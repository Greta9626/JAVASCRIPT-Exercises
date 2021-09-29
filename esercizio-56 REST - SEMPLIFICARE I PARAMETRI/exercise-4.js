function sum(...numeri)  { //rest, prende i parametri e li inserisce dentro un array
  return numeri.reduce((prev, curr) => prev + curr, 0)
} // reduce si usa con gli array

const numbers = [1, 2, 3];
console.log(sum(...numbers)); //spread, scompongo l'array