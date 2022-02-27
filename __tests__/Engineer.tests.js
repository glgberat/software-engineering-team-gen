const Engineer = require('../lib/Engineer.js');

test("Engineer Object has Github Username", ()=> {
const user = "GithubUser";
const engineer = new Engineer ("Sergio", 1, "email@email.com", user);
expect(engineer.github).toBe(user);
});


test("Can get github username via getGithub()", () => {
    const testusername = "gituser";
    const engineer = new Engineer("Name", 1, "email@email.com", "gituser");
    expect(engineer.getGithub()).toBe(testusername);
  });


  test("getRole() should return \"Engineer\"", () => {
    const testName = "Mehmet";
    const engineer = new Engineer(testName);
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
  });