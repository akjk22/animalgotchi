export class Hippo2 {
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
    }, 1000);
  }

  setHealth() {
    setInterval(() => {
      this.healthLevel -=1;
    }, 1000);
  }

  setHunger() {
    setInterval(() => {
      this.hungerLevel += 1;
    }, 1000);
  }
  // didYouGetSick() {
  //   if (this.foodLevel > 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  // feed() {
  //   this.foodLevel = 10;
  // }

  
}