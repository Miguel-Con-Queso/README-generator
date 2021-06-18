module.exports = projectData => {
    console.log(projectData);

    const { title, description, ToC, instilation, usage } = templateData;

    return `
    #${templateData.title}

    ##${description}

    ##${ToC}
    
    ##${instilation}
    
    ##${usage}
    `;
};