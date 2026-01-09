
class CarNotAvailableError extends Error {
  constructor(message = "Car is not available") {
    super(message);  
    this.name = "CarNotAvailableError"; 
}
}

class InvalidRentalDurationError extends Error {
  constructor(message = "Invalid rental duration") {
    super(message); 
    this.name = "InvalidRentalDurationError"; 
  }
}

class Car {

    constructor(make, model, pricePerDay) {
    if (typeof make !== "string" || make.trim() === "") {
        throw new Error("Invalid car make");
    }

    if (typeof model !== "string" || model.trim() === "") {
        throw new Error("Invalid car model");
    }

    if (typeof pricePerDay !== "number" || pricePerDay <= 0) {
        throw new Error("Invalid price per day");
    }

    this.make = make;
    this.model = model;
    this.pricePerDay = pricePerDay;
    this.available = true;
}

  rent() {
    if (!this.available) {
      throw new CarNotAvailableError("This car is already rented");
    }
    this.available = false;
  }

  returnBack() {
    this.available = true;
  }
}

class EconomyCar extends Car {}

class LuxuryCar extends Car {
  extraCost() {
    return 50;
  }
}


class Customer {
  constructor(name, contact) {
    if (!name || typeof name !== "string")
      throw new Error("Invalid name");

    const emailRegex = /^\S+@\S+\.\S+$/;
    const phoneRegex = /^\+?\d{8,}$/;

    if (!emailRegex.test(contact) && !phoneRegex.test(contact))
      throw new Error("Invalid contact info");

    this.name = name;
    this.contact = contact;
    this.history = [];
  }
}


class Rental {
  constructor(id, customer, car, days) {
    if (days <= 0) {
      throw new InvalidRentalDurationError("Days must be positive");
    }

    this.id = id;
    this.customer = customer;
    this.car = car;
    this.days = days;
  }

  start() {
    this.car.rent();
    console.log(`${this.customer.name} rented ${this.car.make}`);
  }

  finish() {
    this.car.returnBack();
    console.log(`${this.customer.name} returned ${this.car.make}`);
  }

  price() {
    let total = this.days * this.car.pricePerDay;

    if (this.days > 5) {
      total *= 0.9;
    }

    if (this.car instanceof LuxuryCar) {
      total += this.car.extraCost();
    }

    return total;
  }
}
