// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by tapi18n-mock.js.
import { name as packageName } from "meteor/jirikrepl:tapi18n-mock";

// Write your tests here!
// Here is an example.
Tinytest.add('tapi18n-mock - example', function (test) {
  test.equal(packageName, "tapi18n-mock");
});
