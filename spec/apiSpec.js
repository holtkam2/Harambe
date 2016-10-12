require('dotenv').config();

const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const request = require('supertest');

// Watson, stormpath, google maps, openweather, darksky, yql
xdescribe('integration tests', () => {
  describe('watson api', () => {
    it('api key working', (done) => {
      request()
        .get()
        .expect()
    });
    it('responds to query', (done) => {
      request()
        .get()
        .expect()
    });
  });

  xdescribe('stormpath api', () => {
    it('api key working', (done) => {
      request()
        .get()
        .expect()
    });
    it('responds to query', (done) => {
      request()
        .get()
        .expect()
    });
  });

  xdescribe('google geocoding api', () => {
    it('api key working', (done) => {
      request()
        .get()
        .expect()
    });
    it('responds to query', (done) => {
      request()
        .get()
        .expect()
    });
  });

  xdescribe('openweather api', () => {
    it('api key working', (done) => {
      request()
        .get()
        .expect()
    });
    it('responds to query', (done) => {
      request()
        .get()
        .expect()
    });
  });

  xdescribe('darksky api', () => {
    it('api key working', (done) => {
      request()
        .get()
        .expect()
    });
    it('responds to query', (done) => {
      request()
        .get()
        .expect()
    });
  });

  xdescribe('yahoo query language api', () => {
    it('api key working', (done) => {
      request()
        .get()
        .expect()
    });
    it('responds to query', (done) => {
      request()
        .get()
        .expect()
    });
  });
});