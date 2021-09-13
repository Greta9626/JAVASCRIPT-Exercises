function calculate() {
  let risultato = 0; //var a cui si deve poi assegnare il risultato delle varie funzioni

  return {
    add(num) {
      risultato += num;
      return this;
    },

    

    multiply(num) {
      risultato *= num;
      return this;
    },

    sub(num) {
      risultato -= num;
      return this;
    },

    divide(num) {
      risultato /= num;
      return this;
    },

    printResult(){
      console.log(risultato);
    },
  };
  } 


const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7