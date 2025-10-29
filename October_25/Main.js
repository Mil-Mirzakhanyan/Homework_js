class Classroom {
  constructor(name) {
    this.name = name;
  }

  info() {
    return `Classroom: ${this.name}`;
  }
}

class Library {
  constructor(bookCount) {
    this.bookCount = bookCount;
  }

  info() {
    return `Library with ${this.bookCount} books`;
  }
}

class Kitchen {
  constructor(chefName) {
    this.chefName = chefName;
  }

  info() {
    return `Kitchen managed by ${this.chefName}`;
  }
}

class PicsartAcademy {
  constructor(classroom, library, kitchen) {
    this.classroom = classroom;
    this.library = library;
    this.kitchen = kitchen;
  }

  showInfo() {
    console.log("Picsart Academy Facilities:");
    console.log(this.classroom.info());
    console.log(this.library.info());
    console.log(this.kitchen.info());
  }
}

const classroom = new Classroom("Programming Lab");
const library = new Library(300);
const kitchen = new Kitchen("Chef Arman");

const academy = new PicsartAcademy(classroom, library, kitchen);

academy.showInfo();