//npm install concat fs-extra --save-dev
const fs = require('fs-extra');
const concat = require('concat');

(async function () {
  // const files = [
  //   './dist/angular-elements-demo/runtime.js',
  //   './dist/angular-elements-demo/polyfills.js',
  //   './dist/angular-elements-demo/main.js',
  // ]
  const files = [
    './dist/angular-elements-demo/runtime.js',
    './dist/angular-elements-demo/polyfills-es5.js',
    './dist/angular-elements-demo/polyfills.js',
    './dist/angular-elements-demo/main.js'
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/elements.js');
  await fs.copyFile('./dist/angular-elements-demo/styles.css', 'elements/styles.css')
})()