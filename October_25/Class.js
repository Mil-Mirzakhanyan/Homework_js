class Classroom {
  constructor(roomNumber) {
    this.roomNumber = roomNumber; 
    this.students = []; 
  }

  addStudent(name) {
    this.students.push(name);
  }

  listStudents() {
    console.log(`Students in room ${this.roomNumber}:`);
    this.students.forEach((student) => console.log(student));
  }
}

const room1 = new Classroom(101);
room1.addStudent("Milena");
room1.addStudent("Sona");
room1.addStudent("Ani");

room1.listStudents();