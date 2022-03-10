'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-cli-image-transformer': {
      images: [
        {
          inputFilename: 'public/images/quino-al-JFeOy62yjXk-unsplash.jpg',
          outputFileName: 'sunset',
          convertTo: 'webp',
          sizes: [400, 1080],
        },
        {
          inputFilename:
            'public/images/nathan-lindahl-1j18807_ul0-unsplash.jpg',
          outputFileName: 'fire',
          convertTo: 'webp',
          sizes: [400, 1080],
        },
        {
          inputFilename:
            'public/images/pawel-czerwinski-NTYYL9Eb9y8-unsplash.jpg',
          outputFileName: 'liquid',
          convertTo: 'webp',
          sizes: [400, 1080],
        },
        {
          inputFilename: 'public/images/holden-baxter-oxQ0egaQMfU-unsplash.jpg',
          outputFileName: 'road',
          convertTo: 'webp',
          sizes: [400, 1080],
        },
      ],
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
