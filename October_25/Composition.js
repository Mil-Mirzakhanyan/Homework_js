class Classroom {
  constructor(roomNumber) {
    this.roomNumber = roomNumber;
    this.students = [];
  }

  addStudent(name) {
    this.students.push(name);
  }

  getStudentNames() {
    return this.students.join(", ");
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    this.books.push({ title, author });
  }

  getBookTitles() {
    return this.books.map(book => book.title).join(", ");
  }
}

class Kitchen {
  constructor() {
    this.staff = [];
  }

  addWorker(name) {
    this.staff.push(name);
  }

  getWorkerNames() {
    return this.staff.join(", ");
  }
}

class PicsartAcademy {
  constructor() {
    this.classroom = new Classroom(101);
    this.library = new Library();
    this.kitchen = new Kitchen();
  }

  showInfo() {
    console.log("Picsart Academy has:");
    console.log(`- 1 classroom with students: ${this.classroom.getStudentNames()}`);
    console.log(`- Library with books: ${this.library.getBookTitles()}`);
    console.log(`- Kitchen with workers: ${this.kitchen.getWorkerNames()}`);
  }
}

const academy = new PicsartAcademy();

academy.classroom.addStudent("Alice");
academy.classroom.addStudent("James");

academy.library.addBook("Clean Code", "Robert C. Martin");
academy.library.addBook("JavaScript: The Good Parts", "Douglas Crockford");

academy.kitchen.addWorker("Chef Bob");
academy.kitchen.addWorker("Mike");

academy.showInfo();