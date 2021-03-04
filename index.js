// Include dependencies for inquirer.js and FS, include classes for engineer, intern and manager
const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");

const employees = [];

// Init function to trigger functions for generating HTML and for add member functions
function initApp() {
    generateHTML();
    addNewMember();
}

// Add new member function with input arrays for enquirer prompts
function addNewMember() {
    inquirer.prompt([{
        type: 'input',
        message: "Type a name for a member of your Team",
        name: "name"
    },
    {
        type: "list",
        message: "What is their role in the Team?",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        type: 'input',
        message: "Enter their ID",
        name: "id"
    },
    {
        type: 'input',
        message: "Include an email address",
        name: "email",
    }])

    // else if function to determine what additional information to prompt for based on selected role
        .then(function ({ name, role, id, email }) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "GitHub username";
            } else if (role === "Intern") {
                roleInfo = "school name/college";
            } else {
                roleInfo = "office phone number";
            }

            // then prompt for the correct information based on role
            inquirer.prompt([{
                type: 'input',
                message: `Enter member's ${roleInfo}`,
                name: "roleInfo"
            },
            {
                // Once all questions are asked prompt to check if they want to add another member
                type: "list",
                message: "Would you like to add another team member?",
                choices: [
                    "yes",
                    "no"
                ],
                name: "moreMembers"
            }])
            
                // Function to add class to new member based on role choice
                .then(function ({ roleInfo, moreMembers }) {
                    let newMember;

                    // Else if statement to determine the class for the content to be appended
                    if (role === "Engineer") {
                        newMember = new Engineer(name, id, email, roleInfo);
                    } else if (role === "Intern") {
                        newMember = new Intern(name, id, email, roleInfo);
                    } else {
                        newMember = new Manager(name, id, email, roleInfo);
                    }

                    // Append new member to the HTML document
                    employees.push(newMember);
                    appendHTML(newMember)
                        .then(function () {

                            // If user selects more members run new members function again
                            if (moreMembers === "yes") {
                                addNewMember();

                            // Else, run finishHtml function
                            } else {
                                finishHtml();
                            }
                        });

                });
        });
}

// Function to generate HTML document
function generateHTML() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link rel="stylesheet" href="../src/styles.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
        <title>Team Profile</title>
    </head>
    
    <body>
        <div class="container" style="padding-top: 40px; padding-bottom: 40px;">
            <h1><i class="fas fa-users" style="padding-right:12px;"></i>Team profile</h1>
        </div>
    
        <div class="container">`;

    // Initial write html file generating document head
    fs.writeFile("./dist/team.html", html, function (err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("begin");
}

// Function to add new member cards to the HTML document for intern, manager and engineer
function appendHTML(member) {
    return new Promise(function (resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";

        // If statement with function to append HTML for engineer card and github username information
        if (role === "Engineer") {
            const gitHub = member.getGithub();

            data = `<div class="row" id="engineer">
            <div class="col-sm-12">
                <div class="card w-100 flex-layout">
                    <div class="avatar-img"><i class="fas fa-user-ninja"></i></div>
                    <div class="flex-direction-inner" style="width: 80%">
                        <h3>${name}</h3>
                        <p class="subtitle">Engineer</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><i class="far fa-id-badge" style="padding-right: 8px;"></i> ID:
                                ${id}
                            </li>
                            <li class="list-group-item"><i class="far fa-envelope" style="padding-right: 8px;"></i>
                                Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item"><i class="fab fa-github" style="padding-right: 8px;"></i>
                                GitHub: <a href="https://github.com/${gitHub}" target="_blank">${gitHub}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;

        // Else if statement with function to append HTML for intern card and school information
        } else if (role === "Intern") {
            const school = member.getSchool();

            data = `<div class="row" id="intern">
            <div class="col-sm-12">
                <div class="card w-100 flex-layout">
                    <div class="avatar-img"><i class="fas fa-user"></i></div>
                    <div class="flex-direction-inner" style="width: 80%">
                        <h3>${name}</h3>
                        <p class="subtitle">Intern</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><i class="far fa-id-badge" style="padding-right: 8px;"></i> ID:
                                ${id}
                            </li>
                            <li class="list-group-item"><i class="fas fa-graduation-cap" style="padding-right: 8px;"></i> School:
                                ${school}
                            </li>
                            <li class="list-group-item"><i class="far fa-envelope" style="padding-right: 8px;"></i>
                                Email: <a href="mailto:${email}">${email}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;

        // Else append HTML for manager card and office phone number information
        } else {
            const officePhone = member.getOfficeNumber();
            data = `<div class="row" id="manager">
            <div class="col-sm-12">
                <div class="card w-100 flex-layout">
                    <div class="avatar-img"><i class="fas fa-user-tie"></i></div>
                    <div class="flex-direction-inner" style="width: 80%">
                        <h3>${name}</h3>
                        <p class="subtitle">Manager</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><i class="far fa-id-badge" style="padding-right: 8px;"></i> ID:
                                ${id}
                            </li>
                            <li class="list-group-item"><i class="far fa-envelope" style="padding-right: 8px;"></i>
                                Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item"><i class="fas fa-mobile-alt" style="padding-right: 8px;"></i> Phone: ${officePhone}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`
        }

        // Write cards to html file
        fs.appendFile("./dist/team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

// function to add closing tags for html and write to HTML document
function finishHtml() {
    const html = `</div>
    </body>
    </html>`;

    // Final write to html file
    fs.appendFile("./dist/team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("Complete - successfully written to team.html!");
}

initApp();