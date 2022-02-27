const Manager = require ('../lib/Manager.js');

test("Can set Office Number for manager object", ()=>{
const manager = new Manager("Mehmet",1,"emai@email.com",1);

expect(manager.officeNumber).toEqual(expect.any(Number));

});


test("getRole() should return \"Manager\"", () => {
    const testName = "Mehmet";
    const manager = new Manager(testName);
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
  });