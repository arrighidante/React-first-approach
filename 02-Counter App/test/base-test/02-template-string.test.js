import { getSaludo } from './../../src/base-test/02-template-string';

describe('Test for 02-template-string', () => {
  test('Get a greeting should return "Hello NAME"', () => {
    // Arrange
    const name = 'Dante';

    // Act
    const message = getSaludo(name);

    // Assert
    expect(message).toBe('Hello ' + name);
  });
});
