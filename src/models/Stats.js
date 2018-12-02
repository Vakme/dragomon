/* eslint-disable semi */
class Stats {
  constructor (perception, strength, constitution, dexterity, intelligence, luck) {
    this.perception = perception;
    this.strength = strength;
    this.constitution = constitution;
    this.dexterity = dexterity;
    this.intelligence = intelligence;
    this.luck = luck
  }
  static baseStats () {
    return new Stats(1, 1, 1, 1, 1, 1);
  }
  getStats () {
    return {
      perception: this.perception,
      strength: this.strength,
      constitution: this.constitution,
      dexterity: this.dexterity,
      intelligence: this.intelligence,
      luck: this.luck
    }
  }
}

export { Stats }
