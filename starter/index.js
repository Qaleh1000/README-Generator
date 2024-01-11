const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Creating an array of questions for the user

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description for your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How is it used?",
  },
  {
    type: "list",
    name: "license",
    message: "From the list below, choose a license for your application:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Did you collaborate with anyone? if so link their gitHub page",
  },
  {
    type: "input",
    name: "tests",
    message: "Did your project require any specific tests:",
    choices: ["yes", "no"],
  },

  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  const readmeContent = generateMarkdown(data);

  // Write the README file
  fs.writeFileSync(fileName, readmeContent);
  console.log("README.md generated successfully!");
}

// function to initialize program
function init() {
  // Prompt the user with questions
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile("README.md", answers);
    })
    .catch((err) => console.error(err));
}

init();
