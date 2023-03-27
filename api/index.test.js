const { app } = require('./index');
const request = require('supertest');

describe('App test', () => {
  test('request test 404', () => {
    return request(app)
      .get('/api/blockchain/asd')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404);
  });
  test('request test 200', () => {
    return request(app)
      .get('/api/blockchain/00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
