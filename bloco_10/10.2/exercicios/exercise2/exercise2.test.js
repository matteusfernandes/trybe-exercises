const { getUserName } = require('./exercise2');

describe('Check the result of the getUserName function:', () => {
  test('the case where the user is found', () => {
    expect.assertions(1);

    return getUserName(4)
    .then((user) => {
      expect(user).toEqual('Mark');
    });
  })

  test('the case where the user is not found.', () => {
    expect.assertions(1);

    return getUserName(6)
    .catch((error) => {
      expect(error).toEqual({ error: 'User with 6 not found.' });
    });
  })
});