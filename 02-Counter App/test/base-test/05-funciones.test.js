import { getActiveUser, getUser } from './../../src/base-test/05-funciones';

describe('Test for 05-funciones', () => {
  test('getUser should return an object', () => {
    // Arrange
    const testUser = {
      uid: 'ABC123',
      username: 'TheUser123',
    };

    // Act
    const user = getUser();

    // Assert
    expect(testUser).toEqual(user);
  });

  test('getActiveUser should return an object', () => {
    // Arrange
    const testUser = {
      uid: 'ABC567',
      username: 'Dante',
    };

    // Act
    const user = getActiveUser('Dante');

    // Assert
    expect(user).toEqual(testUser);
  });
});
