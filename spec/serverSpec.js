var path = require('path');

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var server = require(path.join(__dirname, '..', './server/server.js'));
var routes = require(path.join(__dirname, '..', './server/routes.js'));
var config = require(path.join(__dirname, '..', './server/config.js'));

xdescribe('Server', function () {
  describe('server.js', function() {
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
  })
});

xdescribe('Routes', function () {
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

xdescribe('Config', function () {
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