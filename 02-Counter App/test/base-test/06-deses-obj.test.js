import { usContext } from '../../src/base-test/06-deses-obj';

describe('Test for 06-deses-obj', () => {
  test('usContext should return an object', () => {
    // Arrange
    const personaTest = {
      nombre: 'Tony',
      edad: 45,
      clave: 'Ironman',
    };

    // Act
    const result = usContext(personaTest);

    // Assert
    expect(result).toEqual({
      nombreClave: 'Ironman',
      anios: 45,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
