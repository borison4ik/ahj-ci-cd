import demo from '../app';

describe('demo func', () => {
  test('should return the same value', () => {
    const caseVal = 'value';
    expect(demo(caseVal)).toBe(caseVal);
  });
});
