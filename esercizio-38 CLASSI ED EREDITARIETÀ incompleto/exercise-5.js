class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

class BankAccountVip extends BankAccount {

  constructor(amountVip) { 
    super(amountVip); //il valore è 1000 (riga 37) che passa a initialAmount quindi amount diventa 1000
  }

  depositVip(amountVipDeposit) {
    if (amountVipDeposit >= 1000) {
      amountVipDeposit = amountVipDeposit + amountVipDeposit * 3 / 100;
      super.deposit(amountVipDeposit);
    } else {
      super.deposit(amountVipDeposit);
    }
  }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.depositVip(500);
bankAccountVip.depositVip(1200);
bankAccountVip.withdraw(800);
bankAccountVip.depositVip(3500);
bankAccountVip.view();
bankAccountVip.depositVip(1000);
bankAccountVip.view();
