// Parent class and constructors for employee
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Functions to get details
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }

    // Functions return employee role as default
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;