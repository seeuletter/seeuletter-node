const flatten = require('flat');

function processCreateResourceParams(params) {
  const files = {};

  Object.keys(params)
    .filter(key => key.startsWith('source_file') && !key.endsWith('_type'))
    .forEach(key => {
      files[key] = Buffer.isBuffer(params[key]) 
        ? {
            value: params[key],
            options: { filename: `${key}.pdf` }
          } 
        : params[key];
      delete params[key];
    });

  return { ...flatten(params), ...files };
}

module.exports = {
  processCreateResourceParams,
}