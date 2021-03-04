// Includes intern class
const Intern = require("../lib/Intern");

test("Specifies school with constructor", () => {
  const testValue = "Ravensbourne";
  const e = new Intern("Foo", 1, "foo@bar.com", testValue);
  expect(e.school).toBe(testValue);
});

// Checks getRole function correctly returns Intern
test("getRole function should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "foo@bar.com", "Ravensbourne");
  expect(e.getRole()).toBe(testValue);
});

// Checks getSchool function gets school name
test("Gets school using getSchool function", () => {
  const testValue = "Ravensbourne";
  const e = new Intern("Foo", 1, "foo@bar.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});