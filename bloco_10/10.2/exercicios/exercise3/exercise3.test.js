const { getUserName } = require('./exercise3');

describe('Check the result of the getUserName function:', () => {
  test('the case where the user is found', async () => {
    const data = await getUserName(5);
    expect(data).toEqual('Paul');
  })

  test('the case where the user is not found.', async () => {
    expect.assertions(1);
    try {
      await getUserName(7);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 7 not found.' });
    }
  })
});