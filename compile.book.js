const chokidar = require('chokidar');
const path = require('path');
require('shelljs/global');

const outputFormats = [
  'pdf',
  'html'
];

function prepareOutputDir() {
  outputFormats.forEach(format => {
    rm('-rf', `book/${format}`);
    mkdir('-p', `book/${format}`);
  });
}

function pandoc(input, output) {
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}]${input} -> ${output}`);
  exec(`pandoc ${input} -c pandoc.css -o ${output}`);
}

function compile(file) {
  const fileBasename = path.basename(file, '.md');

  outputFormats.forEach(format => {
    pandoc(file, `book/${format}/${fileBasename}.${format}`);
  });
}

console.log('Setting up output directory...');
prepareOutputDir();
console.log('Compiling files...');
ls('book/*.md')
  .forEach(file => compile(file));
console.log('Watching .md files for changes...');
chokidar.watch('book/*.md')
  .on('change', file => compile(file));