// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

<<<<<<< HEAD
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
=======
// function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
>>>>>>> 9344236b19a6dcf86be568a93541db850672f966
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
      badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if (license === 'Apache 2.0') {
      badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GPL v3.0') {
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else {
    badge = ""
  }
  return badge;
}

<<<<<<< HEAD
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
=======
// function that returns the license link
// If there is no license, it returns an empty string
>>>>>>> 9344236b19a6dcf86be568a93541db850672f966
function renderLicenseLink(license) {
  let licenseLink = '';
    if(license === 'MIT') {
      licenseLink = 'https://choosealicense.com/licenses/mit/'
    } else if (license === 'Apache 2.0') {
      licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
    } else if (license === 'GPL v3.0') {
      licenseLink = 'https://www.gnu.org/licenses'
    } else {
      licenseLink = ""
    }
    return licenseLink;
}

<<<<<<< HEAD
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
=======
// function that returns the license section of README
// If there is no license, it returns an empty string
>>>>>>> 9344236b19a6dcf86be568a93541db850672f966
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
<<<<<<< HEAD
    `## License: ${license}
      ${renderLicenseBadge(license)}
      ${renderLicenseLink(license)}
    `
=======
    `License: ${license} `
>>>>>>> 9344236b19a6dcf86be568a93541db850672f966
  }
  return licenseSection;
}

<<<<<<< HEAD
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  /*renderLicenseBadge(answers.license);
  renderLicenseLink();
  renderLicenseSection();
*/
=======
// function to generate markdown for the README.md
function generateMarkdown(answer) {

>>>>>>> 9344236b19a6dcf86be568a93541db850672f966
  return`
  # ${answers.title}

<<<<<<< HEAD
  ${renderLicenseSection(answers.license)}
=======
  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}
>>>>>>> 9344236b19a6dcf86be568a93541db850672f966

  ## Table of Contents:
  ###  * [Installation](#installation)
  ###  * [Usage](#usage)
  ###  * [License](#license)
  ###  * [Contributors](#contributors)
  ###  * [Tests](#tests)
  ###  * [Questions](#questions)

  ## Installation:
  You must install the following for this app to function:
<<<<<<< HEAD
  ${answers.installations}
=======
  ${answer.installation}
>>>>>>> 9344236b19a6dcf86be568a93541db850672f966

  ## Usage:
  ${answers.usage}

  ## Contributors:
  ${answers.contributions}

  ## Tests:
  Run the following commands in your terminal to test this app:
  ${answers.tests}

  ## Questions:
  If you have any questions, you may contact me at either
<<<<<<< HEAD
  https://github.com/${answers.askMe}
  or
  ${answers.email}
=======
  Github: https://github.com/${answer.askMe}
  or
  Email: ${answer.email}
>>>>>>> 9344236b19a6dcf86be568a93541db850672f966
`;
}

// exports
module.exports = generateMarkdown;