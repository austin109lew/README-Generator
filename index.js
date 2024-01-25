// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function to generate README content based on user responses
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What would you use your project for?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to your project?',
      },
      {
        type: 'input',
        name: 'license',
        message: 'What is licenses did you use for your project?',
      },
      {
        type: 'input',
        name: 'tableOfContents',  
        message: 'What\'s in the table of contents for your project?',
      },
      
      {
        type: 'input',
        name: 'tests',
        message: 'What testing did you do for your project?',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Any questions about your project?',
      },
    // Add more questions as needed
  ];
  
  // Create a function to generate README content based on user responses
  function generateReadme(responses) {
    return `
  # ${responses.title}
  
  ## Description
  ${responses.description}
  
  ## Installation
  ${responses.installation}
  
  ## Usage
  ${responses.usage}
  
  ## Contributing
  ${responses.contributing}
  
  ## License
  ${responses.license}

  ## Table of Contents
  ${responses.tableOfContents}  

  ## Tests
  ${responses.tests}

  ## Questions
  ${responses.questions}
    `;
  }
  
  // TODO: Create a function to write README file
  function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) =>
      err ? console.error(err) : console.log('README generated successfully!')
    );
  }
  
  // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt(questions).then((responses) => {
      // Generate README content based on responses
      const readmeContent = generateReadme(responses);
  
      // Specify the file name, for example, 'README.md'
      const fileName = 'README.md';
  
      // Write the generated README content to the file
      writeToFile(fileName, readmeContent);
    });
  }
  
  // Function call to initialize app
  init();
  