const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../src");
const templatesDir2= path.resolve(__dirname,"../dist");
const generate = (employees) => {
  const html = [];

  html.push(
    ...employees
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => genManager(manager))
  );
  html.push(
    ...employees
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => genEngineer(engineer))
  );
  html.push(
    ...employees
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => genIntern(intern))
  );

  return genIndex(html.join(""));
};

const genManager = (manager) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "manager.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(template,"officeNumber",manager.getofficeNumber());
  return template;
};

const genEngineer = (engineer) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "engineer.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};

const genIntern = (intern) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "intern.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

const genIndex = (html) => {
  const template = fs.readFileSync(
    path.resolve(templatesDir, "index.html"),
    "utf8"
  );
  return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = generate;