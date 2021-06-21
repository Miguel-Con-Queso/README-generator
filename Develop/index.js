// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
//const generateMarkdown = require('./src/README-template')
//const { writeFile } = require('./utils/generateMarkdown');

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
    .then(({
        title,
        description,
        ToC,
        instilation,
        usage
    })=> {
        const template =
        `
    #Title:
    ${title}

    ##Description:
    ${description}

    ##Table of Contents:
    ${ToC}
    
    ##How To Install:
    ${instilation}
    
    ##Usage:
    ${usage}
    `

    generateREADME(title, template);
    })

    function generateREADME(fileName, data) {
        fs.writeFile(`./README.md`, data, (err)=>{
            if(err) {
                console.log(err)
            } else {
                console.log('Your README.md has been generated!')
            }
        })
    }
}

questions();

/*
// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();

*/