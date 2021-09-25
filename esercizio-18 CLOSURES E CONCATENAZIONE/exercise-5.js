function memoize(fn) {
  let cache = {};

  return numero => {/* gli viene passato il valore 10 nel primo caso*/

    if (numero in cache){
      console.log('Il numero ' + numero + ' esiste in cache e ha come risultato');
      return cache[numero];
    }

    const risultato = fn(numero);

    cache[numero] = risultato;
    console.log('Salvo il numero ' + numero);
    return risultato;
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}


factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));