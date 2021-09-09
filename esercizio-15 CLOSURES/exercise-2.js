function pow(base) {
  return esponente => {
    let risultato = base;

    for (let i = 0; i < esponente - 1; i++) {
      risultato = risultato * base;
    }

    return risultato;
  }
}


const pow2 = pow(2);
const pow5 = pow(5);

console.log('--- Power of 2 ---');
console.log(pow2(4));
console.log(pow2(2));
console.log(pow2(8));

console.log('--- Power of 5 ---');
console.log(pow5(4));
console.log(pow5(2));
console.log(pow5(8));

/* -- cosa ho fatto -- alla inner function do come argomento esponente e dichiaro una variabile a cui assegno direttamente il valore di base piuttosto che 0 (altrimento nel ciclo successivo avrei dovuto mettere base * base ma risultato sarebbe rimasto 4 (base * base)). ciclo la funzione con la condizione minore di esponente così che i non lo supera e nel corpo chiamo risultato e faccio risultato * base */