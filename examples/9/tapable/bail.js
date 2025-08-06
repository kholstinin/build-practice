import { SyncBailHook, AsyncSeriesBailHook, AsyncParallelBailHook } from "tapable";

class Car {
  constructor() {
    this.speed = 0;

    this.hooks = {
      accelerate: new SyncBailHook(["newSpeed"]),
    };
  }

  setSpeed(newSpeed) {
    this.hooks.accelerate.call(newSpeed);
    this.speed = newSpeed;
  }
}

const myCar = new Car();

myCar.hooks.accelerate.tap("SpeedingDetect", (newSpeed) => {
  if (newSpeed < 100) {
    console.log("Speed is less than 100");
  } else {
    console.log("Speeding detected!");
    return false;
  }
});

myCar.hooks.accelerate.tap("LogSpeed", (newSpeed) => {
  console.log(newSpeed);
});

myCar.setSpeed(50);
myCar.setSpeed(75);
myCar.setSpeed(100);
myCar.setSpeed(200);
