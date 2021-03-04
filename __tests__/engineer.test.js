// Includes engineer class
const Engineer = require("../lib/Engineer");

test("Specifies GitHUb account with constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "foo@bar.com", testValue);
  expect(e.github).toBe(testValue);
});

// Checks getRole function correctly returns engineer
test("getRole function should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "foo@bar.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

// Checks getGithub function gets Github username
test("Gets GitHub username using getGithub function", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "foo@bar.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});