#! /usr/bin/env node

import { program } from 'commander';
import { random } from './commands/random';
import { prime } from './commands/prime';

program
  .command('random [upTo]')
  .description('Generate a list of random numbers. Max 20.')
  .action(random);

program
  .command('prime [upTo]')
  .description('Generate a list of prime numbers. Default 9.')
  .action(prime);

program.parse();