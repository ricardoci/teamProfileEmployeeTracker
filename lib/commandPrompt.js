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
        const { first_name, newRoleId } = await inquirer.prompt([
          {
            message: "What is the first name of the employee whose role you want to update?",
            type: 'list',
            name: 'first_name',
            choices:['John', 'Mike', 'Bob', 'Alice'],
          },
          {
            message: "What is the ID of the employee's new role?",
            type: 'list',
            name: 'newRoleId',
            choices:['Sales', 'Legal', 'Engineering', 'Finance'],
          },
        ]);
      
        const employeeRecord = await employee.findOne({
          where: {
            first_name: first_name
          },
          include: {
            model: role
          }
        });
      
        if (!employeeRecord) {
          console.log(`No employee found with first name ${first_name}`);
          return;
        }
              
        employeeRecord.role_id = newRoleId;
        await employeeRecord.save();
              
        console.log(`Employee ${first_name}'s role has been updated to ${newRoleId}`);
      
        // logic to update employee role
      } else if (id === 'View All Roles') {
        const Allroles = await role.findAll();
        const roleRows = Allroles.map(role => role.get({ plain: true }));
        console.table(roleRows);
        // logic to view all roles
      } else if (id === 'Add Role') {
        const { title, salary, department_name ,department_id } = await inquirer.prompt([
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
            message: "What is the department name?",
            type: 'list',
            name: 'department_name',
            choices: ['Sales','Engineering','Legal','Finance'],
          },
          {
            message: "What is the department id?",
            type: 'input',
            name: 'department_id',
          },
          
        ]);
        
        await role.create({ title, salary, department_name,department_id });
        console.log('Role added successfully!');
        // logic to add role
      } else if (id === 'View All Departments') {
        const Alldepartments = await department.findAll();
        const departmentRows = Alldepartments.map(department => department.get({ plain: true }));
        console.table(departmentRows);
        // logic to view all departments
      } else if (id === 'Add Department') {
        const { name } = await inquirer.prompt([
          {
            message: "What is the name of the new department?",
            type: 'input',
            name: 'name',
          },
          
          
        ]);
        
        await department.create({ name});
        console.log('Role added successfully!');
        // logic to add department
      } else if (id === 'Exit') {
        // exit the loop and end the function
        break;
      }
    }
  }
}


module.exports = Questions;
