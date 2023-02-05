import { randomInt } from 'crypto';

function generateRandomNumber(min: number, max: number): number {
  return randomInt(min, max + 1);
}

function generateRandomNumbers(upTo: number): Array<number> {
  const numbers: number[] = [];

  while (numbers.length < upTo) {
    let generatedNumber = generateRandomNumber(1, 100);

    if (!numbers.includes(generatedNumber)) { // También se puede hacer con la estructura de datos Set
      numbers.push(generatedNumber);
    }
  }

  return numbers;
}

export { generateRandomNumbers };