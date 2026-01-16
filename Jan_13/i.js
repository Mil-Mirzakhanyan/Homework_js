// bad practise
class Bird {
  eat() {}
  sleep() {}
  fly() {}
}

class Sparrow extends Bird {
  fly() {
    console.log("Sparrow is flying");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguin can't fly!");
  }
}


// good practise

class Bird {
  eat() {}
  sleep() {}
}

class FlyingBird extends Bird {
  fly() {}
}


class Eagle extends FlyingBird {
  fly() {
    console.log("Eagle is soaring high");
  }
}

class Penguin extends Bird {
  
}