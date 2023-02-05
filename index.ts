#! /usr/bin/env node

import { program } from 'commander';
import { random } from './commands/random';
import { prime } from './commands/prime';
import { fibomatch } from './commands/fibomatch';

program
  .command('random [upTo]')
  .description('Generate a list of random numbers. Max 20.')
  .action(random);

program
  .command('prime [upTo]')
  .description('Generate a list of prime numbers. Default 9.')
  .action(prime);

program
  .command('fibomatch [upTo]')
  .description('Generates random numbers (20 max), extracts the prime ones, picks the maximum prime found and builds a fibonnaci sequence as long as that amount.')
  .action(fibomatch)

program.parse();