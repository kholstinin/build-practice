import { SyncWaterfallHook } from "tapable";

class Car {
  constructor() {
    this.speed = 0;

    this.hooks = {
      accelerate: new SyncWaterfallHook(["newSpeed"]),
    };
  }

  setSpeed(newSpeed) {
    const speedFromAccelerate = this.hooks.accelerate.call(newSpeed);
    this.speed = speedFromAccelerate;
    console.log(this.speed);
  }
}

const myCar = new Car();

myCar.hooks.accelerate.tap("Log Speed 1", (newSpeed) => {
  console.log("hook 1", newSpeed);
  return newSpeed + 100;
});

myCar.hooks.accelerate.tap("Log speed 2", (newSpeed) => {
  console.log("hook 2", newSpeed);
  return newSpeed;
});

myCar.setSpeed(50);
