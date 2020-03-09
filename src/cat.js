export class Cat {
  constructor(name) {
    this.name = name;
    this.healthLevel = 100;
    this.hunger = 0;
    this.energy = 100;
    this.hasPooped = false;
  }

  increaseHunger() {
    setInterval(() => {
      this.hunger += 1;
    }, 20000);
  }

  decreaseEnergy() {
    setInterval(() => {
      this.energy -= 1;
    }, 10000);
  }
  
  feed() {
    this.hunger -= 1;
    this.energy += 10;
  }
}