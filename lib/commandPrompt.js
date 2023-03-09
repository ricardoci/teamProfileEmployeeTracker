const inquirer = require('inquirer');
const Sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');

class Questions {
  
    
  questions() {
    return inquirer
      .prompt([
        {
          message: 'What would you like to do?',
          type: 'list',
          name: 'id',
          choices: ['View ALL Employees', 'Add Employee','Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
          
        }
      
      ])
     
  }

  
}  

module.exports = Questions;