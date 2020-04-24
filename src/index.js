import fs from 'fs';
import _ from 'lodash';
import parse from './parsers';
// import path from 'path';
// import yaml from 'js-yaml';

const usePlusOrMinus = (key, before, after) => {
  if (!_.has(before, key)) {
    return `  + ${key}: ${after[key]}`;
  }
  if (!_.has(after, key)) {
    return `  - ${key}: ${before[key]}`;
  }
  if (before[key] === after[key]) {
    return `    ${key}: ${after[key]}`;
  }
  return `  + ${key}: ${after[key]}\n  - ${key}: ${before[key]}`;
};

export default (filePathBefore, filePathAfter) => {
  const contentBefore = parse(filePathBefore, fs.readFileSync(filePathBefore, 'utf-8'));
  const contentAfter = parse(filePathAfter, fs.readFileSync(filePathAfter, 'utf-8'));
  const keysBefore = Object.keys(contentBefore);
  const keysAfter = Object.keys(contentAfter);
  const arrUnion = _.union(keysBefore, keysAfter)
    .map((e) => usePlusOrMinus(e, contentBefore, contentAfter));
  return `{\n${arrUnion.join('\n')}\n}`;
};
