// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
//const generateMarkdown = require('./src/README-template')
//const { writeFile } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = (chosenLicense) => {
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
            type: 'checkbox',
            name: 'license',
            message: 'What license does your project use?',
            choices: ['None', 'Apache 2.0', 'MIT', 'GNU GPL v3'],
            validate: licenseInput = (chosenLicense) => {
                if (licenseInput) {
                    if (licenseInput.value === 'None') {
                        return true;
                    } else if (licenseInput.value === 'Apache 2.0') {
                        let chosenLicense = '/hexpm/l/:packageName';
                        licenseMessage = 'http://www.apache.org/licenses/LICENSE-2.0'
                        return true;
                    } else if (licenseInput.value === 'MIT') {
                        let chosenLicense = '/apm/l/:packageName'
                        licenseMessage ='https://spdx.org/licenses/MIT.html'
                        return true;
                    } else {
                       let chosenLicense = '/eclipse-marketplace/l/:name'
                        licenseMessage ='https://spdx.org/licenses/GPL-3.0-or-later.html'
                        return true;
                    }
                } else {
                    console.log('Please select one of the four options')
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
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'What guidelines must others follow in order to contribute?',
            validate: contributionsInput => {
                if (contributionsInput) {
                    return true;
                } else {
                    console.log('Please enter contribution guidelines');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testing',
            message: 'How do you test this project?',
            validate: testingInput => {
                if (testingInput) {
                    return true;
                } else {
                    console.log('Please explain how to test this project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'askMe',
            message: 'What is your Github username so others can reach you for questions?',
            validate: askMeInput => {
                if (askMeInput) {
                    return true;
                } else {
                    console.log('Please provide your username so others can reach out to you with questions');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email so there is another way to be reached for questions?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please provide an email');
                    return false;
                }
            }
        },
    ])
    .then(({
        title,
        license,
        chosenLicense,
        description,
        ToC,
        instilation,
        usage,
        contributions,
        testing,
        askMe,
        email
    })=> {
        const template =
        `
    # Title: ${title}

    ## License:
    <img src=https://img.shields.io/static/v1?label=<${chosenLicense}>&color=<green>
    ### For license information, please visit ${licenseMessage}

    ## Description:
    ### ${description}

    ## Table of Contents:
    ### ${ToC}
    
    ## How To Install:
    ### ${instilation}
    
    ## Usage:
    ### ${usage}

    ##Contribution Guidelines
    ### ${contributions}

    ##How to Test
    ### ${testing}

    ##Ask Me
    ### Send your questions to https://github.com/${askMe}
    ### Or email me at ${email}
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