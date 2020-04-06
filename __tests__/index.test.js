import fs from 'fs';
// import path from 'path';
import genDiff from '../src/index.js';


test('check json', () => {
  const diff = genDiff('__fixtures__/before.json', '__fixtures__/after.json');
  const expected = fs.readFileSync('__fixtures__/expected.txt', 'utf-8');
  expect(diff).toBe(expected);
});
