function sum(...numeri) {
    return numeri.reduce(function(prev, curr) { 
        return prev + curr }) //in caso di arrow function non serve return, lo fa in automatico
}          //prev: valore iniziale a cui viene sommato curr e assegnato il risultato

console.log(sum(1, 2, 3, 4, 5));