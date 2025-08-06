import { SyncHook } from "tapable";

class Car {
  constructor() {
    this.speed = 0;

    this.hooks = {
      accelerate: new SyncHook(["newSpeed"]),
    };
  }

  setSpeed(newSpeed) {
    this.hooks.accelerate.call(newSpeed);
    this.speed = newSpeed;
  }
}

const myCar = new Car();

myCar.hooks.accelerate.tap("Logger 1", (newSpeed) =>
  console.log(`Logger 1 ${newSpeed}`)
);

myCar.hooks.accelerate.tap("Logger 1", (newSpeed) =>
  console.log(`Logger 2 ${newSpeed}`)
);

myCar.setSpeed(50);
