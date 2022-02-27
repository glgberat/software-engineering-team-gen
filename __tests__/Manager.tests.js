const Manager = require ('../lib/Manager.js');

test("Can get officeNumber via getOfficenumber()", () => {
  const test = "Officenumber";
  const manager = new Manager("Name", 1, "email@email.com", test);
  expect(manager.getofficeNumber()).toBe(test);
});



test("getRole() should return \"Manager\"", () => {
    const testName = "Mehmet";
    const manager = new Manager(testName);
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
  });