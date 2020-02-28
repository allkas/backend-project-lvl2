import fs from 'fs';
// import has from 'lodash';

export default (beforeJson, afterJson) => {
  const result = {};
  const beforeContent = JSON.parse(fs.readFileSync(beforeJson));
  const afterContent = JSON.parse(fs.readFileSync(afterJson));
  const keysBefore = Object.keys(beforeContent);
  const keysAfter = Object.keys(afterContent);
  const minusFilter = keysBefore.filter((key) => !keysAfter.includes(key));
  const plusFilter = keysAfter.filter((key) => !keysBefore.includes(key));
  const filterInvariably = keysAfter.filter((key) => keysBefore.includes(key));
  minusFilter.forEach((key) => {
    result[`- ${key}`] = beforeContent[key];
  });


  plusFilter.forEach((key) => {
    result[`+ ${key}`] = afterContent[key];
  });


  filterInvariably.forEach((key) => {
    if (beforeContent[key] !== afterContent[key]) {
      result[`+ ${key}`] = afterContent[key];
      result[`- ${key}`] = beforeContent[key];
    }
  });
  return JSON.stringify(result);
};