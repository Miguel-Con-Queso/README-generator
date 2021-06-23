const index = require('../index')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(answer.license === 'MIT') {
      badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if (answer.license === 'Apache 2.0') {
      badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (answer.license === 'GPL v3.0') {
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else {
    badge = ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if(answer.license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (answer.license === 'Apache 2.0') {
    licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
  } else if (answer.license === 'GPL v3.0') {
    licenseLink = 'https://www.gnu.org/licenses'
  } else {
    licenseLink = ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, badge, licenseLink) {
  let licenseSection = ''
  if(answer.license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `## License: ${answer.license}
      ${badge}
      ${licenseLink}
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(licenseSection, data) {
  return 
  `
  # ${data.title}

  ${licenseSection}

  ## Table of Contents:
    *[Installation](#instal)
    *[Usage](#usage)
    *[License](#license)
    *[Contributors](#contrib)
    *[Tests](#tests)
    *[Questions](#quests)

  ## Installation:
  You must install the following for this app to function:
  ${data.installations}

  ## Usage:
  ${data.usage}

  ## Contributors:
  ${data.contributions}

  ## Tests:
  Run the following commands in your terminal to test this app:
  ${data.tests}

  ## Questions:
  If you have any questions, you may contact me at either
  https://github.com/${askMe}
  or
  ${email}
`;
}

module.exports = generateMarkdown;
