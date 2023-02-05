type Cash = 'bills' | 'coins';

interface CashCounter {
  cash: number,
  count: number,
  cashType: Cash
};

interface CashTypeCounter {
  bills: number,
  coins: number
}

function getCashType(n: number): Cash {
  return n > 25 ? 'bills' : 'coins';
}

function calcCashBack(n: number): CashCounter[] {
  let cashMachine: CashCounter[] = [];
  let dividend = n;

  if (n >= 2000) { 
    cashMachine = [2000, 1000, 500, 200, 100, 50, 25, 10, 5, 1].map((el) => ({
      cash: el,
      count: 0,
      cashType: getCashType(el)
    }));
  } else if (n < 2000 && n >= 1000) {
    cashMachine = [1000, 500, 200, 100, 50, 25, 10, 5, 1].map((el) => ({
      cash: el,
      count: 0,
      cashType: getCashType(el)
    }));
  } else if (n < 1000 && n >= 500) {
    cashMachine = [500, 200, 100, 50, 25, 10, 5, 1].map((el) => ({
      cash: el,
      count: 0,
      cashType: getCashType(el)
    }));
  } else if (n < 500 && n >= 200) {
    cashMachine = [200, 100, 50, 25, 10, 5, 1].map((el) => ({
      cash: el,
      count: 0,
      cashType: getCashType(el)
    }));
  } else if (n < 200 && n >= 100) {
    cashMachine = [100, 50, 25, 10, 5, 1].map((el) => ({
      cash: el,
      count: 0,
      cashType: getCashType(el)
    }));
  } else if (n < 100 && n >= 50) {
    cashMachine = [50, 25, 10, 5, 1].map((el) => ({
      cash: el,
      count: 0,
      cashType: getCashType(el)
    }));
  } else if (n < 50 && n >= 25) {
    cashMachine = [25, 10, 5, 1].map((el) => ({
      cash: el,
      count: 0,
      cashType: 'coins'
    }));
  } else if (n < 25 && n >= 10) {
    cashMachine = [10, 5, 1].map((el) => ({
      cash: el,
      count: 0,
      cashType: 'coins'
    }));
  } else if (n < 10 && n >= 5) {
    cashMachine = [5, 1].map((el) => ({
      cash: el,
      count: 0,
      cashType: 'coins'
    }));
  } else if (n < 5 && n >= 1) {
    cashMachine = [{
      cash: 1,
      count: 0,
      cashType: 'coins'
    }];
  }

  for (let i = 0; i < cashMachine.length; i++) {
    let cash = cashMachine[i].cash;
    let quotient = dividend / cash;
    
    cashMachine[i].count = Math.floor(quotient);
      
    if (Number.isInteger(quotient)) {   
      break;
    } else {
      let remainder = dividend % cash;
      dividend = remainder;
    }
  }

  return cashMachine;
}

function countCashType(machine: CashCounter[]): CashTypeCounter {
  const counter: CashTypeCounter = {
    bills: 0,
    coins: 0
  }

  machine.forEach((e) => {
    if (e.count > 0) {
      counter[e.cashType] = counter[e.cashType] + e.count;
    }
  })

  return counter;
}

export { calcCashBack, countCashType };