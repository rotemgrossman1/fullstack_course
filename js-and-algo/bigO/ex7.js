class Employees {
    constructor() {
      
        this.workers = new Map();
    }


    addEmployee(empID, salary) {
        this.workers.set(empID, salary);
    }

    findEmployeeSalary(empID) {
        if (this.workers.has(empID)) {
            return this.workers.get(empID);//returns the salary
        }
        
        return "Employee not found"; 
    }
}