// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generatePage = require('./src/README-template')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a project title');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a project description',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a project description');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ToC',
            message: 'Provide a Table of Contents',
            validate: tocInput => {
                if (tocInput) {
                    return true;
                } else {
                    console.log('Please provide a Table of Contents');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'instilation',
            message: 'What steps are needed to install your project?',
            validate: instilationInput => {
                if (instilationInput) {
                    return true;
                } else {
                    console.log('Please provide instilation steps');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the use of your project?',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide a use for your project');
                    return false;
                }
            }
        }
    ])
}

const promptQuests = projectData => {}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


questions()
    .then(promptQuests)
    .then(projectData => {
        const pageREADME = generatePage(projectData);

        fs.writeFile('./README.md', pageREADME, err => {
            if (err) throw new Error(err);

            console.log('README created! You can find the README.md in this directory');
        });
    });