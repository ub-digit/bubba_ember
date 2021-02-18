/* jshint node: true */
module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'bubba-cli',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      defaultLocale: 'sv',
      rootElement: '#ember-app-bubba-cli'
    }
  };
  if (environment === 'development') {
    ENV.APP.serviceURL = 'http://' + process.env.SERVICE_HOSTNAME  + ':' + process.env.BACKEND_SERVICE_PORT;
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    //ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicyHeader = 'Disabled-Content-Security-Policy';
  }
  else if (environment === 'staging') {
    // uncomment below line when testing staging environment locally
    //ENV.contentSecurityPolicyHeader = 'Disabled-Content-Security-Policy';
    ENV.APP.serviceURL = process.env.SERVICE_HOSTNAME;
  }
  else if (environment === 'lab') {
    ENV.APP.serviceURL = process.env.SERVICE_HOSTNAME;
  }
  else if (environment === 'production') {
    ENV.APP.serviceURL = process.env.SERVICE_HOSTNAME;
  }

  return ENV;
};
