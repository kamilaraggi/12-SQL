const fs = require('fs');
const inquirer = require('inquirer');
const db = require('./db/connection');
require('console.table');




// const department = require('./db/schema.sql');

 function questions(){
    
 console.log("     |   |  | |||    EMPLOYEE TRACKER    ||| |  |  |    ")

    inquirer
    .prompt([
    {
      type: 'list',
      name: 'see',
      message: 'What would you like to do?',
      choices: ['view all departments', 'view all roles', 'view all employees',
       'add a department', 'add a role', 'add an employee', 'update an employee role', 'quit'],
       
    },
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
  let idDept = [];
  let nameDpt = [];

  db.query('SELECT * FROM department', (err,res) =>{
    if (err) throw err;
   // res.forEach(({id})=>{
   //   idDept.push(id)
  //  })
   // res.forEach(({name})=>{
   //   nameDpt.push(name)
   // })
   console.table(res)
  })
}

  questions();