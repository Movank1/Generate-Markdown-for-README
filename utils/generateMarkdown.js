// Function that returns a license badge 
// If there is no license, return an empty strin

function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}


// Function that returns the license link


function renderLicenseLink(license) {
  return license !== 'None' ? `\n* [License](#license)\n` : '';
}

// Function that returns the license section of README; If there is no license, return an empty string



function renderLicenseSection(license) {
  return license !== 'None' ? `## License  This is licensed under the ${license} license.` : '';
}

// Create a function to generate markdown for README
function generateMarkdown(data)
 {
return `# ${data.title}
${renderLicenseBadge(data.license)}




## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install the necessary dependencies, please run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributing}

## Tests

To run tests, Please run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions or suggestion  about this project, please open an issue or email me directly at ${
    data.email
  }. Please note that you can find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).

`;
}

module.exports = generateMarkdown;
