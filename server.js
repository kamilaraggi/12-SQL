const fs = require('fs');
const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');
const mysql = require("mysql");
const express = require('express');

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');

    questions();
    });

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
       'add a department', 'add a role', 'add an employee', 'update an employee role'],
      validate: 
      db.query(`SELECT * FROM departments`, (err, rows) => {
        console.log(rows);
      })
    },
};