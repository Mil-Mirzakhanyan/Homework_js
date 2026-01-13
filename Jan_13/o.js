// bad practise
class ShippingCostCalculator {
  calculate(type, weight) {
    if (type === "ground") {
      return weight * 5;
    } else if (type === "air") {
      return weight * 10;
    } else if (type === "express") {
      return weight * 20;
    }
    throw new Error("Unknown shipping type");           
  }
}



// good practise
class Shipping {
  calculate(weight) {
    throw new Error("Method not implemented");
  }
}

class GroundShipping extends Shipping {
  calculate(weight) {
    return weight * 5;
  }
}

class AirShipping extends Shipping {
  calculate(weight) {
    return weight * 10;
  }
}

class ExpressShipping extends Shipping {
  calculate(weight) {
    return weight * 20;
  }
}

class ShippingService {
  constructor(strategy) {
    this.strategy = strategy;
  }

  calculate(weight) {
    return this.strategy.calculate(weight);
  }
}