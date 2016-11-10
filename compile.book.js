const chokidar = require('chokidar');
const path = require('path');
require('shelljs/global');

function prepareOutputDir() {
  //rm('-rf', 'book/html');
  mkdir('-p', 'book/html');
}

function compile(file) {
  const fileBasename = path.basename(file, '.md');
  const outputFile = 'book/html/' + fileBasename + '.html';
  const timestamp = new Date().toISOString();

  console.log('[' + timestamp + ']' + file + ' -> ' + outputFile);
  console.log('pandoc ' + file + ' -c pandoc.css -o ' + outputFile);
  exec('pandoc ' + file + ' -c pandoc.css -o ' + outputFile);
}

console.log('Setting up output directory...');
prepareOutputDir();
console.log('Compiling files...');
ls('book/*.md')
  .forEach(file => compile(file));
console.log('Watching .md files for changes...');
chokidar.watch('book/*.md')
  .on('change', file => compile(file));