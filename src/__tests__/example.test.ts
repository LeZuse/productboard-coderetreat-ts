import { testTS } from '../example';

describe('example', () => {
  it('return string from number', () => {
    expect(testTS(5)).toBe('5');
  });
});
