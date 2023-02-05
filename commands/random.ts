import { generateRandomNumbers } from "../src/random";

export function random(upTo = 5) {
  if (upTo > 20) {
    console.log('Sorry. You can only generate up to 20 random numbers.');
  } else {
    console.log(generateRandomNumbers(upTo));
  }
};