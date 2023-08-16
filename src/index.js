import Bowman from './js/class/Boweman';
import Swordsman from './js/class/Swordsman';
import Undead from './js/class/Undead';
import Zombie from './js/class/Zombie';
import Daemon from './js/class/Daemon';
import Magician from './js/class/Magician';

const bowman = new Bowman('Max');
const swordsman = new Swordsman('Max');
const magican = new Magician('Max');
const undead = new Undead('Max');
const zombie = new Zombie('Max');
const daemon = new Daemon('Max');

bowman.levelUp();
swordsman.levelUp();
magican.damage(30);
undead.levelUp();
zombie.levelUp();
daemon.levelUp();
bowman.damage(100);
