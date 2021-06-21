const answer = require('../index');

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {

    return `
    #Title
    ${answer.title}

    ##Description
    ${answer.description}

    ##Table of Contents
    ${answer.ToC}
    
    ##How To Install
    ${answer.instilation}
    
    ##Usage
    ${answer.usage}
    `;
};

module.exports = generateMarkdown;
/*
function generateMarkdown(data) {
    return `# ${data.title}
  
  `;
  }
  */