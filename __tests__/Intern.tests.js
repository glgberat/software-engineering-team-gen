const Intern = require("../lib/Intern.js");

test("Can set School for intern object", ()=>{
  
  const intern = new Intern("Mehmet", 1,"e@email.com","columbia");
    
    
    expect(intern.school).toBe("columbia");
    
    });


    test("Can get school name via getSchool()", () => {
        const testschoolname = "school";
        const intern = new Intern("Mehmet", 1,"e@email.com", testschoolname);
        expect(intern.getSchool()).toBe(testschoolname);
      });
    


    test("getRole() should return \"Intern\"", () => {
        const testName = "Mehmet";
        const intern = new Intern(testName);
        expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
      });