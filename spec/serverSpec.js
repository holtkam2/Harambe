const path = require('path');
const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const request = require('supertest');

describe('loading express', () => {
  let server;
  beforeEach((done) => {
    server = require(path.join(__dirname, '..', './server/server.js'), { bustCache: true });
    done();
  });
  afterEach((done) => {
    server.listen();
    done();
  });

  it('responds to /', (done) => {
    request(server)
      .get('/')
      .expect(302, done);
  });
  it('404 bad path', (done) => {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});

describe('database', () => {
  let server;
  beforeEach((done) => {
    server = require(path.join(__dirname, '..', './server/server.js'), { bustCache: true });
      done();
  });
  afterEach((done) => {
    server.listen();
    done();
  });

  it('stores a test in database', (done) => {
    let test = { testName: 'TestMan' };
    request(server)
      .post('/api/tests')
      .send(test)
      .expect(201, done);
  });

  it('retrieves stored user from database', (done) => {
    request(server)
      .get('/api/tests/TestMan')
      .expect(200)
      .expect(
        (res) => {
          console.log('HERE', res.body);
          if (res.body.testName === 'TestMan') done(); }
      )
      .catch((err) => {
        console.log(err);
      });
  });

  it('removes a user in database', (done) => {
    let test = { testName: 'TestMan' };
    request(server)
      .delete('/api/tests/TestMan')
      .send(test)
      .expect(204, done);
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
