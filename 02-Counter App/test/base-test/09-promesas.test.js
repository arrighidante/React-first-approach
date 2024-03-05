import { getHeroeByIdAsync } from '../../src/base-test/09-promesas';

describe('Test in 09-promesas', () => {
  test('getHeroeByIdAsync should return a hero', (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC',
      });
      done();
    });
  });

  test('getHeroeByIdAsync should return error if id do not exists', (done) => {
    const id = 100;

    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe('No hero was found with id: ' + id);
      done();
    });
  });
});
