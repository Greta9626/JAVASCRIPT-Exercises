function sumUntil(maxValue) {
  let sum = 0;

  for (let index = 1; index <= maxValue; index++) {
    sum += index;/* per usare += devo avere un valore numerico nella variabile */
  }
  /* il ciclo funziona: index=1 che è <= di 5 quindi la condizione è rispettata per continuare a ciclare, 1 viene sommato a sum e alla fine del ciclo si somma 1 a index. il ciclo ricomincia con index = 2 che è <= di 5 e verrà sommato a a sum che è 1 al momento e diventa 3. */

  return sum;
}

console.log(sumUntil(5)); /* il parametro serve a passare dei valori alla funzione */