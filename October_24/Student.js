class Student {
  constructor(name) {
    this.name = name;      
    this.grades = [];       
  }

  
  addGrade(grade) {
    this.grades.push(grade);
  }

  
  average() {
    if (this.grades.length === 0) {
      return 0;  
    }
    let sum = 0;
    for (let g of this.grades) {
      sum += g;
    }
    return sum / this.grades.length;
  }
}


const student = new Student("Milena");

student.addGrade(85);
student.addGrade(90);
student.addGrade(78);


console.log("Average grade:", student.average());