require('dotenv').config();

const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const request = require('supertest');

// Watson, stormpath, google maps, openweather, darksky, yql
describe('integration tests', () => {
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

  describe('stormpath api', () => {
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

  describe('google geocoding api', () => {
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

  describe('openweather api', () => {
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

  describe('darksky api', () => {
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

  describe('yahoo query language api', () => {
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