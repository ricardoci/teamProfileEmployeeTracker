const inquirer = require('inquirer');
const consoleTable = require('console.table');
const employee = require('../models/Employee');
const Department = require('../models/Department');
const Role = require('../models/Role');

class Questions {
  async questions() {
    const { id } = await inquirer.prompt([
      {
        message: 'What would you like to do?',
        type: 'list',
        name: 'id',
        choices: ['View ALL Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
      }
    ]);
// this if statement returns all the employees object if it is true
    if (id === 'View ALL Employees') {
      //findAll() method on the employee model to retrieve all the employee records from the database
      const employees = await employee.findAll();
      const employeeRows = employees.map(employee => employee.get({ plain: true }));
      console.table(employeeRows);
    
    }
  
  }
}

module.exports = Questions;
