export class Hippo {
  constructor(name) {
    this.name = name;
    this.healthLevel = 100;
  }
  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  didYouGetSick() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
  }

  
}