import { TAPi18n } from 'meteor/tap:i18n';
// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See tapi18n-mock-tests.js for an example of importing.
export const name = 'tapi18n-mock';

TAPi18n.server_translators.en = (() => {});
TAPi18n.__ = ((x) => x);
