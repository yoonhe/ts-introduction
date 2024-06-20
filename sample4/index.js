function createCar(make, model) {
  return {
    make: make,
    model: model,
    display: function () {
      console.log(`Car: ${this.make} ${this.model}`);
    },
  };
}

const car = createCar("Toyota", "Corolla");
car.display(); // Car: Toyota Corolla
