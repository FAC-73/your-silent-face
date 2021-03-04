// Imports from employee parent class
const Employee = require("./employee");

// Intern class extends from employee parent class & extends constructor to include School
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    // method function returns Intern
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;