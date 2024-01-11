// Function to generate markdown for README
function generateMarkdown(data) {
  const readmeContent = `
  # ${data.title}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  This project is licensed under the ${data.license} license.
  
  ## Contributing
  ${data.contributing || "No specific contributing guidelines provided."}
  
  ## Tests
  ${data.tests || "No specific tests provided."}
  
  ## Questions
  For additional questions, contact [${data.github}](https://github.com/${
    data.github
  }) or email ${data.email}.
  `;

  return readmeContent;
}

module.exports = generateMarkdown;
