const sass = require('node-sass');

module.exports = data => sass.renderSync({ data }).css.toString();