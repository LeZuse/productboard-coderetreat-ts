import { testTS } from '../example';

describe('example', () => {
  test('return string from number', () => {
    expect(testTS(5)).toBe('5');
  });
});
