import { calcCashBack, countCashType } from "../src/cashback";

export function cashback(n: number) {
  const machine = calcCashBack(n);
  const cashCount = countCashType(machine);

  console.log('Cantidad de billetes y monedas: ', cashCount);
  console.log('Cantidad por denominación: ', machine.filter(e => e.count > 0));
};