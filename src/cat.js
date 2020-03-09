export class Cat {
  constructor(name) {
    this.name = name;
    this.energy = 100;
    this.healthLevel = 100;
    this.hunger = 0;
    this.feedCount = 0;
    this.hasPooped = false;
  }

  //Every 20 seconds, hunger method increases by 1
  increaseHunger() {
    setInterval(() => {
      this.hunger += 1;
    }, 20000);
  }

  //Every 10 seconds, energy is decreased by 1. 
  decreaseEnergy() {
    setInterval(() => {
      this.energy -= 1;
    }, 10000);
  }
  
  //User triggered methods: 
  feed() {
    this.hunger -= 1;
    this.energy += 10;
    this.feedCount += 1;
  }
}