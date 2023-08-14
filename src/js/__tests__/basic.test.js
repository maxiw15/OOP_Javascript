import {
  Bowman,
  Swordsman,
  Magician,
  Undead,
  Zombie,
  Daemon,
  Character
} from '../../index';

// eslint-disable-next-line import/extensions,import/no-unresolved


describe('Character', () => {
it('should throw an error if name is not a string or has length less than 2 characters', () => {
expect(() => new Character(123, 'Bowman')).toThrowError('Invalid name. Name should be a string with length between 2 and 10 characters');
expect(() => new Character('A', 'Bowman')).toThrowError('Invalid name. Name should be a string with length between 2 and 10 characters');
});

it('should throw an error if type is not a valid type', () => {
expect(() => new Character('John', 'Hunter')).toThrowError('Invalid type');
});

it('should initialize properties correctly based on type', () => {
const bowman = new Bowman('Robin');
expect(bowman.name).toBe('Robin');
expect(bowman.type).toBe('Bowman');
expect(bowman.health).toBe(100);
expect(bowman.level).toBe(1);
expect(bowman.attack).toBe(25);
expect(bowman.defence).toBe(25);

const swordsman = new Swordsman('Arthur');
expect(swordsman.name).toBe('Arthur');
expect(swordsman.type).toBe('Swordsman');
expect(swordsman.health).toBe(100);
expect(swordsman.level).toBe(1);
expect(swordsman.attack).toBe(40);
expect(swordsman.defence).toBe(10);
});

it('should increase level, attack, defence, and restore health when levelUp() is called', () => {
const character = new Character('John', 'Bowman');
character.health = 50;
character.levelUp();
expect(character.level).toBe(2);
expect(character.attack).toBe(30);
expect(character.defence).toBe(30);
expect(character.health).toBe(100);
});

it('should set health to 0 when damage points exceed health', () => {
const character = new Character('John', 'Bowman');
character.damage(150);
expect(character.health).toBe(0);
});

it('should reduce health based on damage points and defence', () => {
const character = new Character('John', 'Bowman');
character.damage(50);
expect(character.health).toBe(62.5);
});
});

describe('Bowman', () => {
it('should have type “Bowman”', () => {
const bowman = new Bowman('Robin');
expect(bowman.type).toBe('Bowman');
});
});

describe('Swordsman', () => {
it('should have type “Swordsman”', () => {
const swordsman = new Swordsman('Arthur');
expect(swordsman.type).toBe('Swordsman');
});
});

describe('Magician', () => {
it('should have type “Magician”', () => {
const magician = new Magician('Merlin');
expect(magician.type).toBe('Magician');
});
});

describe('Undead', () => {
it('should have type “Undead”', () => {
const undead = new Undead('Dracula');
expect(undead.type).toBe('Undead');
});
});

describe('Zombie', () => {
it('should have type “Zombie”', () => {
const zombie = new Zombie('Hank');
expect(zombie.type).toBe('Zombie');
});
});

describe('Daemon', () => {
it('should have type “Daemon”', () => {
const daemon = new Daemon('Lucifer');
expect(daemon.type).toBe('Daemon');
});
});
