// import fs from 'fs';
// import path from 'path';
import genDiff from '../src/index.js';


test('check json', () => {
  const diff = genDiff('__tests__/__fixtures__/before.json', '__tests__/__fixtures__/after.json');
  const expected = '{"- proxy":"123.234.53.22","- follow":false,"+ verbose":true,"+ timeout":20,"- timeout":50,"host":"hexlet.io"}';
  expect(diff).toBe(expected);
});
