// Includes manager class
const Manager = require("../lib/Manager");

test("Specifies office number with constructor", () => {
  const testValue = 999;
  const e = new Manager("Foo", 1, "foo@bar.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

// Checks getRole function correctly returns Manager
test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "foo@bar.com", 999);
  expect(e.getRole()).toBe(testValue);
});

// Checks getOffice function gets phone number
test("Gets office phone number via getOffice function", () => {
  const testValue = 999;
  const e = new Manager("Foo", 1, "foo@bar.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});