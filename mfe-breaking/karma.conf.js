// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const grid = require('url').parse(process.env.SELENIUM_URL || ''); // adjust your config accordingly

module.exports = function (config) {
  config.set({
    basePath: '',
    hostname: process.env.SELENIUM_URL ? require('ip').address() : 'localhost', // adjust your config accordingly
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-webdriver-launcher'), // adjust your config accordingly
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/coreui-remote-angular-template'),
      subdir: '.',
      reporters: [
        {type: 'html'},
        {type: 'text-summary'},
        {type: 'cobertura', dir: 'coverage/'}
      ]
    },
    customLaunchers: { // adjust your config accordingly
      'Chrome-Webdriver': {
        base: 'WebDriver',
        config: {
          hostname: grid.hostname,
          port: grid.port,
        },
        browserName: 'chrome',
      },
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: !process.env.SELENIUM_URL, // adjust your config accordingly
    browsers: [process.env.SELENIUM_URL ? 'Chrome-Webdriver' : 'Chrome'], // adjust your config accordingly
    singleRun: process.env.SELENIUM_URL, // adjust your config accordingly
    captureTimeout: 210000, // adjust your config accordingly
    browserDisconnectTolerance: 3, // adjust your config accordingly
    browserDisconnectTimeout: 210000, // adjust your config accordingly
    browserNoActivityTimeout: 210000, // adjust your config accordingly
    restartOnFileChange: true
  });
};
