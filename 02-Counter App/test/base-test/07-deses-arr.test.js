import { returnArray } from '../../src/base-test/07-deses-arr';

describe('Test in 07-deses-arr', () => {
  test('Should return a string and a number', () => {
    const [letters, numbers] = returnArray();

    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');

    expect(letters).toEqual(expect.any(String));
  });
});
