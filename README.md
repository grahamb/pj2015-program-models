# PJ 2015 Program Models

This repository contains common [Mongoose](http://mongoosejs.com/) models for PJ 2015 Programs. It does not contain application-specific models (such as users for the selection app, etc); these are contained in their own app-specific repos.

## Tests

To run tests:

* Install mocha if not already installed: `npm -g install mocha`
* Edit the mongoUrl property `test/config.json` to point to a working MongoDB instance. Default is `mongodb://localhost/pj-models-test`
* `npm install`
* `npm test`