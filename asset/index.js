// Imported required packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');



// Questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'Please provide the GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide the email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide the description of your project',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choise the license your project should have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please name the command should be run to install dependencies?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please name the command used to run tests?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
  },
];

// Function to write README file using the user input


function writeToFile(fileName, data) {
  const filePath = path.join(process.cwd(), 'output', fileName); //save generated file to output dir.
  
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('This is the Error on file:', err);
    } else {
      console.log('Data entred to file successfully!');
    }
  });
}

// Function to ask the user a series of questions. then , it generates the responses in README file
async function init() {
  try {
    const inquirerResponses = await inquirer.prompt(questions);
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  } catch (error) {
    console.error('Error:', error);
  }
}

init();
