interface Vehicle {
  make: string;
  model: string;
  display(): void;
}

class Car implements Vehicle {
  constructor(public make: string, public model: string) {}

  display(): void {
    console.log(`Car: ${this.make} ${this.model}`);
  }
}

const car: Vehicle = new Car("Toyota", "Corolla");
car.display(); // Car: Toyota Corolla
