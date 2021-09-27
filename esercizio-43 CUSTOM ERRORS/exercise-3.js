class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  //per creare delle classi custom (così da gestire più facilmente gli errori), estendo la classe di error e modifico il name

  deposit(amount) {
    if (amount < 0) {
      throw new NegativeAmountError('The amount provided cannot be negative'); // Use custom Error class
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new NegativeAmountError('The amount provided cannot be negative'); // sostituisco in questa istanza la class Error con NegativeAmountError(estensione della class Error)
    }

    if (this.#amount < amount) {
      throw new WithdrawNotPermittedError('You cannot withdraw more than account balance'); // Use custom Error class
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

class NegativeAmountError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NegativeAmountError';
  }
}

class WithdrawNotPermittedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'WithdrawNotPermittedError';
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log(e.message);
}