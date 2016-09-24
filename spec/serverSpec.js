const path = require('path');
const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const request = require('supertest');

describe('loading express', function() {
  let server;
  beforeEach(function() {
    server = require(path.join(__dirname, '..', './server/server.js'), { bustCache: true });
  });
  afterEach(function(done) {
    server.listen();
    done();
  });

  it('responds to /', function(done) {
    request(server)
      .get('/')
      .expect(200);
    done();
  });
  it('404 bad path', function(done) {
    console.log('test 404')
    request(server)
      .get('/foo/bar')
      .expect(404);
    done();
  });
});

// describe('Server', function () {
//   describe('server.js', function() {
//     'use strict';

//     describe('Loading express', function() {
//       let serverInstance;

//       beforeEach(function() {
//         serverInstance;
//       });
//       afterEach(function() {
//         serverInstance.close();
//       });

//       it('responds to /', function(done) {
//         request(server)
//           .get('/')
//           .expect(200, done);
//       });
//       it('404 everything else', function(done) {
//         request(server)
//           .get('/foo/bar')
//           .expect(404, done);
//       });
//     });
//   });

//     xit('exists', function () {
//       expect(SOMETHING_HERE).to.be.a('function');

//     });

//     xit('does something', function () {
//       expect(true).to.equal(false);
//     });

//     xit('does something else', function () {
//       expect(true).to.equal(false);
//     });
//   })
// });

// xdescribe('Routes', function () {
//   'use strict';

//   it('exists', function () {
//     expect(SOMETHING_HERE).to.be.a('function');

//   });

//   it('does something', function () {
//     expect(true).to.equal(false);
//   });

//   it('does something else', function () {
//     expect(true).to.equal(false);
//   });
// });

// xdescribe('Config', function () {
//   'use strict';

//   it('exists', function () {
//     expect(SOMETHING_HERE).to.be.a('function');

//   });

//   it('does something', function () {
//     expect(true).to.equal(false);
//   });

//   it('does something else', function () {
//     expect(true).to.equal(false);
//   });
//});
