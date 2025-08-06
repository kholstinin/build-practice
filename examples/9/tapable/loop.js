import { SyncLoopHook } from "tapable";

class Car {
  constructor() {
    this.speed = 0;

    this.hooks = {
      accelerate: new SyncLoopHook(["newSpeed"]),
    };
  }

  setSpeed(newSpeed) {
    this.hooks.accelerate.call(newSpeed);
    this.speed = newSpeed;
  }
}

const myCar = new Car();

let i = 0;
myCar.hooks.accelerate.tap("Logger 1", (newSpeed) => {
  console.log(`Logger 1 ${newSpeed}`);
});

myCar.hooks.accelerate.tap("Logger 1", (newSpeed) => {
  i++;
  console.log(`Logger 2 ${newSpeed}`);

  if (i > 5) {
    return undefined;
  }

  return "string";
});

myCar.setSpeed(50);
