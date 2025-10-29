class Kitchen {
  constructor() {
    this.staff = []; 
  }

  addWorker(name) {
    this.staff.push(name); 
  }

  listWorkers() {
    console.log("Kitchen Staff:");
    this.staff.forEach((worker) => {
      console.log(`${worker}`);
    });
  }
}
const kitchen = new Kitchen();

kitchen.addWorker("Anna");
kitchen.addWorker("David");
kitchen.addWorker("Lilit");

kitchen.listWorkers();