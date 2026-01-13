// bad practise

class EmployeeManager {
  constructor(name, hours, rate) {
    this.name = name;
    this.hours = hours;
    this.rate = rate;
  }

  calculateSalary() {            
    return this.hours * this.rate;
  }

  calculateTax() {          
    return this.calculateSalary() * 0.2;
  }

  generateReport() {            
    return `Employee: ${this.name}
Salary: ${this.calculateSalary()}
Tax: ${this.calculateTax()}`;
  }

  save() {                       
    console.log(this.generateReport());
  }
}
                 // good practice
class Employee {
  constructor(name, hours, rate) {
    this.name = name;            
    this.hours = hours;
    this.rate = rate;
  }
}

class SalaryCalculator {
  salary(employee) {             
    return employee.hours * employee.rate;
  }

  tax(employee) {
    return this.salary(employee) * 0.2;
  }
}

class ReportGenerator {
  create(employee, calculator) { 
    return `Employee: ${employee.name}
Salary: ${calculator.salary(employee)}
Tax: ${calculator.tax(employee)}`;
  }
}

class ConsoleStorage {
  save(report) {                 
    console.log(report);
  }
}

