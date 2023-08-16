export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Invalid name. Name should be a string with length between 2 and 10 characters');
    } else {
      this.name = name;
    }

    if (!types.includes(type)) {
      throw new Error('Invalid type');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('нельзя повысить левел умершего');
    } else {
      // eslint-disable-next-line no-plusplus
      this.level++;
      this.attack += Math.round(this.attack * 0.2);
      this.defence += Math.round(this.defence * 0.2);
      this.health = 100;
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
