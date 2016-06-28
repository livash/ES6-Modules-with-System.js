export class Animal {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`${this.name} says Hello!`);
  }
}