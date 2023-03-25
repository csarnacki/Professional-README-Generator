// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'description?',
        message: 'What is your project about?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will this project be used?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you allowing for your project?',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'None']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What are the contribution guidelines?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./create/generated-README.md', data, (err) => 
    err ? console.error(err) : console.log('File written!'))
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    });
}

// Function call to initialize app
init();
