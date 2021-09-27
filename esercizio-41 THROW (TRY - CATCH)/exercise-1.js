class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  //TRY esegue un pezzo di codice, nel caso in cui dovessero esserci errori, l'esecuzione del try si blocca, non viene eseguito(ciò che succede dopo l'errore) e successivamente l'errore viene 'lanciato' (o da js stesso (esempio undefined) oppure da un throw che inseriamo noi), l'errore viene catturato dal  CATCH e viene gestito dallo sviluppatore come meglio crede (es. console.log - alert - costrutti come if, for ecc (tutto ciò che riteniamo opportuno))

  deposit(amount) {
    try {
      if (amount >= 0) {
        this.#amount += amount;
      } else {
        throw new Error(`la somma da depositare (${amount}) è negativa`); //questo paramentro è il message, Error è il name
      }
    }
     catch(err) {
       console.log(err.message)
     }
    // throw an exception if amount is negative
    
  }

  withdraw(amount) {
    try {
      if (amount >= 0) { //if dentro un if
        if (amount < this.#amount) {
          this.#amount -= amount;
        } else {
          throw new Error(`la somma da ritirare (${amount}) è superiore al saldo disponibile`);
        }
      } else {
        throw new Error(`la somma da ritirare (${amount}) è negativa`);
      }
    }
     catch(err) {
       console.log(err.message)
     }
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(-3000);
bankAccount.deposit(200);
bankAccount.withdraw(-3000);
bankAccount.withdraw(500);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();