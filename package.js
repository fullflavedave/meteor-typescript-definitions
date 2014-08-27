Package.describe({
  summary: "This is the typescript-libs package ported for 0.9.0 and later.  It contains TypeScript definitions for Meteor core, common Meteor packages, and common third-party JS libraries.",
  version: "0.9.0",
  git: "https://github.com/fullflavedave/meteor-typescript-definitions.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
//  api.addFiles('fullflavedave:typescript-defs.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fullflavedave:typescript-defs');
  api.addFiles('fullflavedave:typescript-defs-tests.js');
});
