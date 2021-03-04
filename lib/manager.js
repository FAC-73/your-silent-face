// Imports from employee parent class
const Employee = require ("./employee");

// Manager class extends from employee parent class & extends constructor to include Office phonr number
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    // method function returns manager
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;