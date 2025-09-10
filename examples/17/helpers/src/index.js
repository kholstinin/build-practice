class Animal {
  speak() {
    console.log("...");
  }
}

class Dog extends Animal {
  speak() {
    console.log("woof!");
  }
}

async function run() {
  await new Promise((r) => setTimeout(r, 1000));
  new Dog().speak();
}

run();
