import Character from './Character';

export default class Daemon extends Character {
  constructor(name, type = 'Swordsman') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
