// Imports from employee parent class
const Employee = require("./employee");

// Engineer class extends from employee parent class & extends constructor to include Github
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // method function returns engineer
    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;