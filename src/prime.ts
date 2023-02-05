function isAPrimeNumber(n: number): boolean {
  let isPrime: boolean = true;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
    isPrime = false;
    return isPrime; // También se puede terminar con break, pero como no tenemos más instrucciones luego del for, no es necesario.
    }
  }

  return isPrime;
}
  
function generatePrimeNumbers(upTo: number): Array<number> {
  const primeNumbers: number[] = [];

  for(let i = 2; primeNumbers.length < upTo; i++) {
    if(isAPrimeNumber(i)) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}

export { 
  isAPrimeNumber,
  generatePrimeNumbers 
};