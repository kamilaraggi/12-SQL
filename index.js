
const fs = require('fs');
const inquirer = require('inquirer');
// const connection = require('mysql2/typings/mysql/lib/Connection');
const db = require('./db/connection');
require('console.table');


console.log("     |   |  | |||    EMPLOYEE TRACKER    ||| |  |  |    ")

 function questions(){ 
    inquirer
    .prompt([
    {
      type: 'list',
      name: 'see',
      message: 'What would you like to do?',
      choices: ['view all departments', 'view all roles', 'view all employees',
       'add a department', 'add a role', 'add an employee', 'update an employee role', 'quit']
    }
    // get code from tutoring session ->
    ]) .then((answers) => {
      switch(answers.see) {
        case "view all departments":
          departments(); 
          break;
          case 'view all roles':
            roles();
            break;
            case 'view all employees':
              employees();
              break;
              case 'add a department':
                addDepartment();
                break;
                case 'add a role':
                addRole();
                break;
                case 'add an employee':
                  addEmployee();
                  break;
                  case 'update an employee role':
                    updateRole();
                    break;
                    default:
                      quit();
      }
    })
  };

 function departments(){
  //let idDpt = [];
  //let nameDpt = [];

  db.query('SELECT * FROM department', (err,res) =>{
    if (err) throw err;
   // res.forEach(({id})=>{
   //   idDept.push(id)
  //  })
   // res.forEach(({name})=>{
   //   nameDpt.push(name)
   // })
   console.table(res),

    // My code start
   console.log(questions())
  })
 };

 function roles(){
  db.query('SELECT * FROM role', (err,res) => {
    if (err) throw err;
    console.table(res),
    console.log(questions())
  })
};

 function employees(){
  db.query('SELECT * FROM employee', (err,res) => {
    if (err) throw err;
    console.table(res),
    console.log(questions())
  })
  
 };

 function addDepartment(){
   inquirer
   .prompt([
     {
       type: 'input',
       name:'name',
       message:'Enter a department name:'
     }
   ])
    .then((userInput) => {
    db.query('INSERT INTO department SET ?',
    userInput, function(err,res){
      if (err) throw err;
     console.log('  / / / / / / / NEW DEPARTMENT ADDED !  / / / / / / / /  '),
     console.log(questions());
    })
   })
  };
  
  function addRole(){
    inquirer.prompt([
      {
        type:'input',
        name:'title',
        message:'Add a role title:'
      },
      {
        type:'input',
        name:'salary',
        message:'Salary for this role: $'
      },
      {
        type:'input',
        name:'department_id',
        message:'Enter a department id:'
      },
    ]).then((userInput) => {
      db.query('INSERT INTO role SET ?',
      userInput, function(err,res){
        if (err) throw err;
       console.log('  / / / / / / / NEW ROLE ADDED !  / / / / / / / /  '),
       console.log(questions());
      })
  })
};

function addEmployee(){
  inquirer.prompt([
    { 
      type:'input',
      name:'first_name',
      message:'Enter their first name:'
     },
     {
       type:'input',
       name:'last_name',
       message:'Enter their last name:'
     },
     {
       type:'inout',
       name:'role_id',
       message:'Add their role id:'
     },
    // {
    //  type:'input',
    //   name:'manager_id',
    //   message:'Add their manager id:'
    // }
  ]).then((userInput) => {
    db.query('INSERT INTO employee SET ?',
    userInput, function(err,res){
      if (err) throw err;
     console.log('  / / / / / / / NEW EMPLOYEE ADDED !  / / / / / / / /  '),
     console.log(questions());
    })
 })
};

function updateRole(){
  
}

  questions();