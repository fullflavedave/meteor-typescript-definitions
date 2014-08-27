Package.describe({
  summary: "meteor.d.ts plus other common Typescript+Meteor definitions",
  version: "0.9.0",
  git: ""
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
