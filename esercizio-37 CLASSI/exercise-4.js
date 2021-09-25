class BankAccount {
    amount = 0; //importo iniziale pari a 0

    constructor(importo) { //costruttore a cui passo nei parametri 1000
        this.amount = importo;
    }

    deposit(amount) { //metodo che fa la somma di amount = 1000 + 500 (che passo entrando nell'istanza delle classe) e poi con 200. quindi totale 1700
        this.amount += amount;
    }

    withdraw(amount) { //metodo che sottrae amount (1700) - 800 = 900 
        this.amount -= amount;
    }

    view() {
        console.log(this.amount)
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view(); 