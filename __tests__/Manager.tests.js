const Manager = require ('../lib/Manager.js');

test("Can set Office Number for manager object", ()=>{
const manager = new Manager("Mehmet");

expect(manager.officeNumber).toEqual(expect.Any(Number));

});


test("getRole() should return \"Manager\"", () => {
    const testName = "Mehmet";
    const manager = new Manager(testName);
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
  });