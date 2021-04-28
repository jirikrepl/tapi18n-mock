/* globals Package */
Package.describe({
    name: 'jirikrepl:tapi18n-mock',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/jirikrepl/tapi18n-mock',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md',
    testOnly: true,
});

Package.onUse(function (api) {
    api.versionsFrom('1.11.1');
    api.use('ecmascript');
    api.use('tap:i18n@1.6.1');
    api.mainModule('tapi18n-mock.js');
});

Package.onTest(function (api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('jirikrepl:tapi18n-mock');
    api.mainModule('tapi18n-mock-tests.js');
});
