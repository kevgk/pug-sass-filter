const sass = require('node-sass');

module.exports = (data, { style='nested' }) => sass.renderSync({
  data, 
  outputStyle: style
}).css.toString();