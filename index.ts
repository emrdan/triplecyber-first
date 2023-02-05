#! /usr/bin/env node

import { program } from 'commander';
import { random } from './commands/random'

program
  .command('random [upTo]')
  .description('Generate a list of randon numbers. Max 20.')
  .action(random);

program.parse();