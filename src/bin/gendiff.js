#!/usr/bin/env node

import program from 'commander';
import genDiff from '..';
import { description, version } from '../../package.json';

program
  .version(version)
  .description(description)
  .option('-f, --format [type]', 'output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((pathToFileBefore, pathToFileAfter) => (
    console.log(genDiff(pathToFileBefore, pathToFileAfter))
  ))
  .parse(process.argv);
