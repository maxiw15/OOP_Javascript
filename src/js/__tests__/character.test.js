import Character from '../class/Character';
import Bowman from '../class/Boweman';
import Magician from '../class/Magician';

describe('Character', () => {
  it('should throw an error if name is not a string or has length less than 2 characters', () => {
  expect(() => new Character(123, 'Bowman')).toThrowError('Invalid name. Name should be a string with length between 2 and 10 characters');
  expect(() => new Character('A', 'Bowman')).toThrowError('Invalid name. Name should be a string with length between 2 and 10 characters');
  });

  it('should throw an error if type is not a valid type', () => {
  expect(() => new Character('John', 'Hunter')).toThrowError('Invalid type');
  });


  it('should set health to 0 when damage points exceed health', () => {
    const character = new Bowman('John');
    character.damage(150);
    expect(character.health).toBe(0);
  });

  it('should reduce health based on damage points and defence', () => {
    const character = new Magician('Max');
    character.damage(50);
    expect(character.health).toBe(70);
  });
});
