export class Cat {
  constructor(name) {
    this.name = name;
    this.energy = 100;
    this.healthLevel = 100;
    this.hunger = 0;
    this.feedCount = 0;
    this.hasPooped = false;
  }

  /* TIMED METHODS */

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

  /* TIMED MONITORING METHODS */

  // If animal has been fed 5 times, hasPooped should be true
  checkIfPooped() {
    setInterval(() => {
      if (this.feedCount % 5 === 0) {
        this.hasPooped = true;
      }
    }, 1000);
  }
  
  /* MANUALLY TRIGGERED METHODS */
  feed() {
    this.hunger -= 1;
    this.energy += 10;
    this.feedCount += 1;
  }
}