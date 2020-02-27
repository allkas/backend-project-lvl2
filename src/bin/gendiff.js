#!/usr/bin/env node
import program from 'commander';
import fs from 'fs';

const genDiff = (beforeJson, afterJson) => {
  const result = {};
  const beforeContent = JSON.parse(fs.readFile(beforeJson));
  const afterContent = JSON.parse(fs.readFile(afterJson));
  const keysBefore = Object.keys(beforeContent);
  const keysAfter = Object.keys(afterContent);
  for (const key of keysAfter) {
    if (!keysBefore.includes(key)) {
      result[`+ ${key}`] = afterContent[key];
    }
  }
  for (const key of keysBefore) {
    if (!keysAfter.includes(key)) {
      result[`- ${key}`] = beforeContent[key];
    }
    if (keysAfter.includes(key) && beforeContent[key] === afterContent[key]) {
      result[key] = afterContent[key];
    }
    if (keysAfter.includes(key) && beforeContent[key] !== afterContent[key]) {
      result[`+ ${key}`] = afterContent[key];
      result[`- ${key}`] = beforeContent[key];
    }
  }
  return JSON.stringify(result);
};

program
  .version('0.1.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    genDiff(firstConfig, secondConfig);
  })
  .parse(process.argv);
