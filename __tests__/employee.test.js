// Includes employee parent class
const Employee = require("../lib/Employee");

// test to check parent class constructors
describe("Employee", () => {
    it("Can invoke Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("Specifies name via constructor", () => {
        const name = "Jon";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("Specifies id via constructor", () => {
        const testValue = 999;
        const e = new Employee("Foo", testValue);
        expect(e.id).toBe(testValue);
    });

    it("Specifies email via constructor", () => {
        const testValue = "foo@bar.com";
        const e = new Employee("Foo", 1, testValue);
        expect(e.email).toBe(testValue);
    });

    // test to check getName function
    describe("getName", () => {
        it("Gets name via getName function", () => {
            const testValue = "Jon";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
        
    // test to check getID function
    describe("getId", () => {
        it("Gets ID via getId function", () => {
            const testValue = 999;
            const e = new Employee("Foo", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
    
    // test to check getEmail function
    describe("getEmail", () => {
        it("Gets email via getEmail function", () => {
            const testValue = "foo@bar.com";
            const e = new Employee("Foo", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
        
    // test to check getRole function
    describe("getRole", () => {
        it("getRole function should return \"Employee\"", () => {
            const testValue = "Employee";
            const e = new Employee("Jon", 1, "foo@bar.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
    
});