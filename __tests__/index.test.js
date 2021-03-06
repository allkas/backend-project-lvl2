import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const getPath = (filename) => path.join('__fixtures__', filename);

test('check json', () => {
  const diff = genDiff(getPath('before.json'), getPath('after.json'));
  const expected = fs.readFileSync(getPath('expected.txt'), 'utf-8');
  expect(diff).toBe(expected);
});

test('check yaml', () => {
  const diff = genDiff(getPath('before.yaml'), getPath('after.yaml'));
  const expected = fs.readFileSync(getPath('expected.txt'), 'utf-8');
  expect(diff).toBe(expected);
});

test('check ini', () => {
  const diff = genDiff(getPath('before.ini'), getPath('after.ini'));
  const expected = fs.readFileSync(getPath('expected.txt'), 'utf-8');
  expect(diff).toBe(expected);
});
