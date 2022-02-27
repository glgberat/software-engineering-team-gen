
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//const path = require("path");
//const fs = require("fs");

//const OUTPUT_DIR = path.resolve(__dirname, "output");
//const outputPath = path.join(OUTPUT_DIR, "team.html");

//const render = require("./lib/htmlRenderer");


const team = [];

const managerQ = [
  {
    type: "input",
    name: "name",
    message: "What is the Manager's name?",
   
  },
  {
    type: "input",
    name: "id",
    message: "What is the Manager's ID?",
   
  },
  {
    type: "input",
    name: "email",
    message: "What is the Manager's email address?",
    
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the Manager's office number?",
  
  },
];
const engineerQ = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
    
  },
  {
    type: "input",
    name: "id",
    message: "What is the engineer's ID?",
    
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email address?",
    
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's GitHub name?",
    
  },
];
const internQ = [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
    
  },
  {
    type: "input",
    name: "id",
    message: "What is the intern's ID?",
    
  },
  {
    type: "input",
    name: "email",
    message: "What is the intern's email address?",
    
  },
  {
    type: "input",
    name: "school",
    message: "Where did the intern go to school?",
    
  },
];


function start() {
  inquirer.prompt(managerQ).then((answers) => {
    const managerQ = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );

    team.push(managerQ);
    generateTeam();
  });
}

function engineer() {
  inquirer.prompt(engineerQ).then((answers) => {
    const engineerQ = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    team.push(engineerQ);
    generateTeam();
  });
}

function intern() {
  inquirer.prompt(internQ).then((answers) => {
    const internQ = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    team.push(internQ);
    generateTeam();
  });
}

/*function generateTeam() {
  fs.writeFileSync(outputPath, render(members), "utf-8");
} */

function generateTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choices",
        message: "Would you like to add another member to the team?",
        choices: ["Engineer", "Intern", "No, Generate Team"],
      },
    ])
    .then((answers) => {
      if (answers.choices === "Intern") {
        intern();
      } else if (answers.choices === "Engineer") {
        engineer();
      } else {
        console.log(team);
        //generateTeam();
      }
    });
}

start();
