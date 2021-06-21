const fs = require('fs');

// TODO: Create a function to write README file
const writeFile = READMEContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./README.md', READMEContent, err => {
          if (err) {
              reject(err);
              return;
          }

          resolve({
              ok: true,
              message: 'README.md created!'
          });
      });
  });
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}



module.exports = { writeFile, generateMarkdown };
