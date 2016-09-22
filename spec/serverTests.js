var path = require('path');
var expect = require('chai').expect;

var server = require(path.join(__dirname, '..', './server/server.js'));
var routes = require(path.join(__dirname, '..', './server/routes.js'));
var config = require(path.join(__dirname, '..', './server/config.js'));

describe('Server', function () {
  'use strict';

  it('exists', function () {
    expect(SOMETHING_HERE).to.be.a('function');

  });

  it('does something', function () {
    expect(true).to.equal(false);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });
});

describe('Routes', function () {
  'use strict';

  it('exists', function () {
    expect(SOMETHING_HERE).to.be.a('function');

  });

  it('does something', function () {
    expect(true).to.equal(false);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });
});

describe('Config', function () {
  'use strict';

  it('exists', function () {
    expect(SOMETHING_HERE).to.be.a('function');

  });

  it('does something', function () {
    expect(true).to.equal(false);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });
});