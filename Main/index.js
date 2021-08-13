const inquirer = require('inquirer')
const fs = require('fs');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const generateHTML = require('./src/generatehtml.js');
var listofMembers = [];


function managerPrompt() {
    const managerArray = [{
        type: 'input',
        message: 'Please enter manager name:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please enter manager ID:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Please enter manager email:',
        name: 'email',
    },

    {
        type: 'input',
        message: 'Please enter manager phone number:',
        name: 'officeNumber',
    }];

    inquirer.prompt(managerArray).then(data => {
        // console.log(data)
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        // console.log(manager)
        listofMembers.push(manager)
        console.log(listofMembers)

        menuPrompt();

    })

};

function menuPrompt() {
    const menuArray = [{

        type: 'list',
        message: 'Please choose from list:',
        choices: ['Engineer', 'Intern', 'Done'],
        name: 'menu',

    }];
    inquirer.prompt(menuArray).then(data => {
        console.log(data)

        if (data.menu === 'Engineer') {
            engineerPrompt();
        }
        else if (data.menu === 'Intern') {
            internPrompt();
        }
        else if (data.menu === 'Done') {
            writeFile();
        }
    })
};

function engineerPrompt() {
    const engineerArray = [{

        type: 'input',
        message: 'Please enter engineer name:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please enter engineer ID:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Please enter engineer email:',
        name: 'email',
    },

    {
        type: 'input',
        message: 'Please enter engineer github username:',
        name: 'github',


    }];
    inquirer.prompt(engineerArray).then(data => {
        // console.log(data)
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        // console.log(engineer)
        listofMembers.push(engineer)
        console.log(listofMembers)

        menuPrompt();



    });
};

function internPrompt() {
    const internArray = [{
        type: 'input',
        message: 'Please enter intern name:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please enter intern ID:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Please enter intern email:',
        name: 'email',
    },

    {
        type: 'input',
        message: 'Please enter intern school:',
        name: 'school',
    }];

    inquirer.prompt(internArray).then(data => {
        // console.log(data)
        const intern = new Intern(data.name, data.id, data.email, data.school);
        // console.log(intern)
        listofMembers.push(intern)
        console.log(listofMembers)

        menuPrompt();


    })
};



managerPrompt();

// function writeFile(members) {
//     listofMembers = members; 
//     fs.writeFile('./dist/index.html', members, (err) =>
//     err ? console.log(err) : console.log('Successfully created index.html!')
//     );
// };




