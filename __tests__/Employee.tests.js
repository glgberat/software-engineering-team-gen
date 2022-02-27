const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
    const employee = new Employee("Sergio",1,"email@email.com");
  
  
    expect(employee.name).toBe('Sergio');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe("email@email.com");
    
  });


  test("Can get name via getName()", () => {
    const testName = "Mehmet";
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
  });

  test("Can get id via getId()", () => {
    const testName = "Mehmet";
    const employee = new Employee(testName,1);
    expect(employee.getId()).toBe(1);
  });

  test("Can get e-mail via getEmail()", () => {
    const testEmail = "email@email.com";
    const employee = new Employee("Mehmet",1,testEmail);
    expect(employee.getEmail()).toBe(testEmail);
  });


  test("getRole() should return \"Employee\"", () => {
    const testName = "Mehmet";
    const employee = new Employee(testName);
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
  });