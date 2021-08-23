const { getRepos } = require('./exercise4');

describe('Check the result of the getRepos function:', () => {
  test('the result should contain "sd-01-week4-5-project-todo-list"', () => {
    expect.assertions(1);

    return getRepos('https://api.github.com/orgs/tryber/repos')
    .then((result) => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
    });
  });

  test('the result should contain "sd-01-week4-5-project-meme-generator"', () => {
    expect.assertions(1);

    return getRepos('https://api.github.com/orgs/tryber/repos')
    .then((result) => {
      expect(result).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});