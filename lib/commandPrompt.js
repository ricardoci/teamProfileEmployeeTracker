const inquirer = require('inquirer');
const consoleTable = require('console.table');
const employee = require('../models/Employee');
const department = require('../models/Department');
const role = require('../models/Role');


class Questions {
  async questions() {
    while (true) { // keep prompting user until they choose to exit
      const { id } = await inquirer.prompt([
        {
          message: 'What would you like to do?',
          type: 'list',
          name: 'id',
          choices: ['View ALL Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Exit'],
        }
      ]);

      if (id === 'View ALL Employees') {
        //findAll() method on the employee model to retrieve all the employee records from the database
        const Allemployees = await employee.findAll();
        const employeeRows = Allemployees.map(employee => employee.get({ plain: true }));
        console.table(employeeRows);
   
      } else if (id === 'Add Employee') {

        const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
          {
            message: "What is the employee's first name?",
            type: 'input',
            name: 'first_name',
          },
          {
            message: "What is the employee's last name?",
            type: 'input',
            name: 'last_name',
          },
          {
            message: "What is the employee's role ID?",
            type: 'input',
            name: 'role_id',
          },
          {
            message: "What is the employee's manager ID?",
            type: 'input',
            name: 'manager_id',
          },
        ]);
        
        await employee.create({ first_name, last_name, role_id, manager_id: manager_id ? manager_id : null });
        console.log('Employee added successfully!');
      
      
        // logic to add employee
      } else if (id === 'Update Employee Role') {
        // logic to update employee role
      } else if (id === 'View All Roles') {
        const Allroles = await role.findAll();
        const roleRows = Allroles.map(role => role.get({ plain: true }));
        console.table(roleRows);
        // logic to view all roles
      } else if (id === 'Add Role') {
        const { title, salary, department_id } = await inquirer.prompt([
          {
            message: "What is the name of the role?",
            type: 'input',
            name: 'title',
          },
          {
            message: "What is the salary of the role?",
            type: 'input',
            name: 'salary',
          },
          {
            message: "What is the department id?",
            type: 'input',
            name: 'department_id',
          },
          
        ]);
        
        await role.create({ title, salary, department_id });
        console.log('Role added successfully!');
        // logic to add role
      } else if (id === 'View All Departments') {
        const Alldepartments = await department.findAll();
        const departmentRows = Alldepartments.map(department => department.get({ plain: true }));
        console.table(departmentRows);
        // logic to view all departments
      } else if (id === 'Add Department') {
        // logic to add department
      } else if (id === 'Exit') {
        // exit the loop and end the function
        break;
      }
    }
  }
}


module.exports = Questions;
