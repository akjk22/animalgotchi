export class Hippo {
  constructor(name) {
    this.name = name;
    this.healthLevel = 100;
    this.hungerLevel = 10;
    this.isSick = false;
  }

  checkEverySecond() {
    setInterval(() => {
      if (this.hungerLevel >= 20) { 
        this.isSick = true; 
      }
      if (this.hungerLevel <= 0) {
        this.isSick = true;
      }
    }, 1000);
  }

  setHealth() {
    setInterval(() => {
      this.healthLevel -=1;
    }, 60000);
  }

  setHunger() {
    setInterval(() => {
      this.hungerLevel += 1;
    }, 20000);
  }
  // didYouGetSick() {
  //   if (this.foodLevel > 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  feed() {
    this.foodLevel = 10;
  }

  
}