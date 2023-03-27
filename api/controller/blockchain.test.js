const getInfoByHash = require('./blockchain');

describe('getInfoByHash', () => {
  test('failed test', () => {
    return getInfoByHash('123456').catch((err) => {
      expect(err.response.status).toBe(404);
    });
  });
  test('success test', () => {
    return getInfoByHash('00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa').then((resp) => {
      expect(typeof resp.data).toBe('object');
    });
  });
});
