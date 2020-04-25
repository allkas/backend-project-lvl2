import yaml from 'js-yaml';
import path from 'path';
import ini from  'ini';

const formats = {
  '.json': JSON.parse,
  '.yaml': yaml.safeLoad,
  '.ini': ini.parse,
};

export default (file, content) => formats[path.extname(file)](content);
