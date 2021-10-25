const fs = require('fs');
const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');
const department = require('./db/schema.sql');



function questions(){
    console.log("     |   |  | |||    EMPLOYEE TRACKER    ||| |  |  |    ")
    inquirer
    .prompt([
    {
      type: 'list',
      name: 'see',
      message: 'What would you like to do?',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
      //validate: userInput => {
      //  if (userInput) {
       //   return console.table(department);
       // } else if (userInput === 'view all roles'){
       //   return console.table(role);
      //  }
     }])
    };