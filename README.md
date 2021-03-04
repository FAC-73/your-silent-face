# your-silent-face
A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

![Animated GIF of profile generator application in terminal](https://github.com/FAC-73/your-silent-face/blob/main/assets/Application-recording.gif?raw=true) <br />
Download the video of the generator [here ](https://github.com/FAC-73/your-silent-face/blob/main/assets/Application-video.mp4?raw=true)

Quickly and easily create a team profile HTML document by using a node.js application in the command line to generate one.
<br />

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Description

![Profile generator webpage](https://github.com/FAC-73/your-silent-face/blob/main/assets/Team-profile.png?raw=true)

A node.js application that prompts a user for input using [inquirer.js ](https://www.npmjs.com/package/inquirer)generating a html document. The HTML document is generated and written to a directory called dist and can be found [here ](https://github.com/FAC-73/dream-attack/blob/master/export/README.md)
<br /><br />
This app uses a test-driven development approach. [JEST ](https://jestjs.io/en/) is used to perform tests on all the class constructors to ensure that they behave as intended.
<br /><br />
Using an object-orientated programming approach, using classes and constructors to generate new team members determined by information inputted by the user. The app is run on Node.js and leverages the "Inquirer.js" and "FS" node modules. 
Separate .js files for each member classes are stored in separate js. files and use the module.export and require methods to pass data. 
<br /><br />
To generate the HTML files the FS node module is used to generate strings written in JS. To ensure the UI can scale to accomodate an unlimited number of team members, the html is constructed in a modular way. Starting with the head and body HTML elements. Followed by a new column and a html div with the class card (leveraging Bootstrap CSS styling) each time a new member object is created. Content within the card is appended with information captured from the user input. 

View the webpage output of the generator [here ](https://github.com/FAC-73/your-silent-face/blob/main/dist/team.html)

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation

Install NPM

```md
npm init
```

Install inquirer

```md
npm install inquirer
```

Install JEST

```md
npm install jest --global
```

## Usage
Run the following command at the root of your directory and answer the prompted questions in terminal/bash.

```md
node index.js
```

## Licence
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br />

## Contributing
[Kay Davis](https://github.com/FAC-73)
<br />

## Built with
- [Javascript](https://www.w3schools.com/jsref/default.asp)
- [Node.js](https://nodejs.org/en/)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [Jest](https://jestjs.io/en/)
- [JSON](https://www.json.org/json-en.html)

## Questions?

### GitHub Username:
[FAC-73](https://github.com/FAC-73)

###  ✉️ Email me:
[kaydavis21@googlemail.com](mailto:kaydavis21@googlemail.com)

### 📁 GitHub project repo:
[https://github.com/FAC-73/dream-attack](https://github.com/FAC-73/your-silent-face)

### 🔗 Deployed application:
[https://github.com/FAC-73/dream-attack](https://github.com/FAC-73/your-silent-face)
