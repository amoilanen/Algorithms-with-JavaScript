module.exports = function(config) {

  var configuration = {
    basePath: '.',
    frameworks: ['jasmine'],
    files: [
      'src/**/*.js',
      'spec/**/*.js'
    ],
    preprocessors: {
      'src/**/*.js': ['babel'],
      'spec/**/*.js': ['babel']
    },
    browsers: ['PhantomJS'],
    reporters: ['spec'],
    singleRun: true,
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      }
    }
  };

  if (config.tdd) {
    configuration = Object.assign(configuration, {
      browsers: ['Chrome'],
      reporters: ['dots'],
      singleRun: false,
      autoWatch: true
    });
  }

  config.set(configuration);
};