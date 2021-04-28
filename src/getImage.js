const img = function (relativePath) {
  return require('./assets/' + relativePath);
};

export {img};