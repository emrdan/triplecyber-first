import { isAPrimeNumber } from "./prime";

function extractPrimeFromRandom(randomList: number[]): number[] {
  return randomList.filter(e => isAPrimeNumber(e));
}

function calcFibSequence(upTo: number): number[] {
  const fZero: number = 0;
  const fOne: number = 1;
  const sequence: number[] = [fZero, fOne];

  let fNth: number;

  for (let i = 2; i < upTo; i++) {
    fNth = sequence[i - 2] + sequence[i - 1];
    sequence.push(fNth);
  }

  return sequence;
}

export {
  extractPrimeFromRandom,
  calcFibSequence
}