/* eslint-disable semi */
import { Stats } from './Stats'

class Monster {
  constructor (name, type, health, stamina, exp, lvl, stats, specialSkill) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.stamina = stamina;
    this.exp = exp;
    this.lvl = lvl;
    this.stats = stats;
    this.specialSkill = specialSkill;
  }
  static baseMonster () {
    return new Monster('Randy', 'Goldpuker', 100, 100, 0, 1, Stats.baseStats(), 1);
  }
  getMonster () {
    return {
      name: this.name,
      type: this.type,
      health: this.health,
      stamina: this.stamina,
      exp: this.exp,
      lvl: this.lvl,
      stats: this.stats.getStats(),
      specialSkill: this.specialSkill
    }
  }
}

export { Monster }
