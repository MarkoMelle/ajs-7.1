import Validator from '../nicknames';

test.each([
  ['Joh-_n123J', true],
  ['John123', false],
  ['1John1', false],
  ['1John-', false],
  ['John1234J', false],
])(
  ('should validate user name'), (name, response) => {
    const result = new Validator();
    result.validateUsername(name);
    expect(result.validateUsername(name)).toBe(response);
  },
);
