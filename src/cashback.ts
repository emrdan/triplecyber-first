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

function getCashMachine(cashToExclude: number): CashCounter[] {
  const billsAndCoins: number[] = [2000, 1000, 500, 200, 100, 50, 25, 10, 5, 1];
  const machine: CashCounter[] = billsAndCoins
    .filter((cash) => cash < cashToExclude)
    .map((cash) => ({
      cash,
      count: 0,
      cashType: getCashType(cash)
    }))
  
  return machine;
}

function calcCashBack(n: number): CashCounter[] {
  let cashMachine: CashCounter[] = [];
  let dividend = n;

  if (n >= 2000) { cashMachine = getCashMachine(2001) } 
  else if (n < 2000 && n >= 1000) { cashMachine = getCashMachine(2000) } 
  else if (n < 1000 && n >= 500) { cashMachine = getCashMachine(1000) } 
  else if (n < 500 && n >= 200) { cashMachine = getCashMachine(500) } 
  else if (n < 200 && n >= 100) { cashMachine = getCashMachine(200) } 
  else if (n < 100 && n >= 50) { cashMachine = getCashMachine(100) } 
  else if (n < 50 && n >= 25) { cashMachine = getCashMachine(50) } 
  else if (n < 25 && n >= 10) { cashMachine = getCashMachine(25) } 
  else if (n < 10 && n >= 5) { cashMachine = getCashMachine(10) } 
  else if (n < 5 && n >= 1) { cashMachine = getCashMachine(5) }

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