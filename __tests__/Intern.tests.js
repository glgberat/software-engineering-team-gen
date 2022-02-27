const Intern = require("../lib/Intern.js");

test("Can set School for intern object", ()=>{
    const intern = new Intern("Mehmet");
    const schoolName = "test";
    
    expect(intern.school).toBe(schoolName);
    
    });


    test("Can get school name via getSchool()", () => {
        const testschoolname = "school";
        const intern = new Intern("Mehmet");
        expect(intern.getSchool()).toBe(testschoolname);
      });
    


    test("getRole() should return \"Intern\"", () => {
        const testName = "Mehmet";
        const intern = new Intern(testName);
        expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
      });