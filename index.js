// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project?",
  },
  {
    type: "input",
    name: "APIs",
    message: "List the names of APIs or packages you used.",
  },
  {
    type: "input",
    name: "contributors",
    message: "List any contributors or sources used for this project.",
  },
  {
    type: "input",
    name: "tests",
    message: "Please list any tests that should be run on your application.",
  },
  {
    type: "list",
    name: "license",
    message: "Choose which license is the application covered under.",
    choices: ['Mit', 'Apache', 'GNU', 'BSD'],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username",
  },
  {
  type: "input",
  name: "email",
  message: "Enter your email address.",
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();

