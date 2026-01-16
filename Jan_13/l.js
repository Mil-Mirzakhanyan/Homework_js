// good practise

class Shape {
  area() {
    throw new Error("Not implemented");
  }
}

class Rectangle extends Shape {
  constructor(w, h) {
    super();
    this.w = w;
    this.h = h;
  }

  area() {
    return this.w * this.h;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}


// // bad practise

class Rectangle {
  setWidth(w) {
    this.width = w;
  }

  setHeight(h) {
    this.height = h;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(w) {
    this.width = w;
    this.height = w;
  }

  setHeight(h) {
    this.width = h;
    this.height = h;
  }
}