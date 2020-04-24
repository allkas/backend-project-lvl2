import yaml from 'js-yaml';
import path from 'path';

const formats = {
  '.json': JSON.parse,
  '.yaml': yaml.safeLoad,
};

export default (file, content) => formats[path.extname(file)](content);