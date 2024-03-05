import { getHeroeById, getHeroesByOwner } from '../../src/base-test/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Test in 08-imp-exp', () => {
  test('getHeroeById should return an object by its ID', () => {
    // Arrange
    const id = 1;

    // Act
    const hero = getHeroeById(id);

    // Assert
    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('getHeroeById should return undefined if ID does not exist', () => {
    // Arrange
    const id = 100;

    // Act
    const hero = getHeroeById(id);

    // Assert
    expect(hero).toBeFalsy();
  });

  test('getHeroesByOwner should return DC Heros', () => {
    // Arrange
    const owner = 'DC';
    const dcFilteredHeros = heroes.filter((heroe) => heroe.owner === 'DC');

    // Act
    const heros = getHeroesByOwner(owner);

    // Assert
    expect(heros).toHaveLength(3);
    expect(heros).toEqual(dcFilteredHeros);
  });

  test('getHeroesByOwner should return Marvel Heros', () => {
    // Arrange
    const owner = 'Marvel';
    const marvelFilteredHeros = heroes.filter(
      (heroe) => heroe.owner === 'Marvel'
    );

    // Act
    const heros = getHeroesByOwner(owner);

    // Assert
    expect(heros).toHaveLength(marvelFilteredHeros.length);
  });
});
