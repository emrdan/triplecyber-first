import { generateRandomNumbers } from "../src/random";
import { extractPrimeFromRandom, calcFibSequence } from "../src/fibomatch";

export function fibomatch(upTo = 5) {
  if (upTo > 20) {
    console.log('Sorry. You can only generate up to 20 random numbers.');
  } else {
    const random = generateRandomNumbers(upTo);
    const primes = extractPrimeFromRandom(random);
    const maxPrime = primes.length > 0 ? Math.max(...primes) : 0;
    const sequence = maxPrime > 0 ? calcFibSequence(maxPrime) : [];

    console.log("Random Numbers Generated: ", random);

    console.log(`
      Prime Numbers Extracted: ${primes}
      Maximum Prime Found: ${maxPrime}
    `)

    console.log("Fibonacci Sequence: ", sequence);
  }
};