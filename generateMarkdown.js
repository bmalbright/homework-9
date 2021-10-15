
//Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
 
# ${(data.title)}

![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

  ## Table of Contents
   - [Project Description](#project-description)
   - [APIs](#apis)
   - [Contributors](#contributors)
   - [Tests](#tests)
   - [License](#license)
   - [Contact Info](#contact-info)

  ## Project Description
  ### ${data.description}

  ## APIs:
  ### ${data.APIs}

  ## Contributors
  ### ${data.contributors}

  ## Tests
  ### ${data.tests}

  ## License
  ### ${data.license}

  # Contact Info

  ## github
 [github.com/${data.github}](https://github.com/${data.github})

  ## email
  ### ${data.email}
  `
}

module.exports = generateMarkdown;
