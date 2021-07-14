const { uppercase } = require('./exercise1')

describe('Write a test that checks the callback call of the uppercase function', () => {
  test('should return XABLAU', (done) => {
    uppercase('xablau', (result) => {
      expect(result).toBe('XABLAU');
    });
    done();
  });
});