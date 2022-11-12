// Import and require Inquirer
const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');
const utils = require('util');
// const { addEmployee, updateRole, addRole } = require('./question');
// Require the questions prompt
const questions = require('./question');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'C0dingisfun!',
        database: 'employee_db'
    },
    console.log('Connected to the employee_db database.')
);

db.query = utils.promisify(db.query);

// Function to ask what they would like to do
async function menu() {
    // inquirer.prompt()
    const answers = await inquirer.prompt(questions.menu)
    // THEN decide which function to call
    if (answers.menu === "View All Employees") {
        viewAllEmployees();
    } else if (answers.menu === "Add Employee") {
        addEmployee();
    } else if (answers.menu === "Update Employee Role") {
        updateRole();
    } else if (answers.menu === "View All Roles") {
        viewAllRoles();
    } else if (answers.menu === "Add Role") {
        addRole();
    } else if (answers.menu === "View All Departments") {
        viewAllDepartments();
    } else if (answers.menu === "Add Department") {
        addDepartment();
    } else {
        return
    }
};

// View all departments and show department names and department ids
async function viewAllDepartments() {
    const result = await db.query('SELECT id, name FROM department');
    console.table(result);
    menu();
};

// View all roles and show title, role id, department, and salary
async function viewAllRoles() {
    const result = await db.query(
        'SELECT roles.id AS id, title, department.name AS department, salary FROM roles JOIN department ON roles.department_id = department.id'
        );
    console.table(result);
    menu();
};

// View all employees and show employee id, first name, last name, job title, department, salary, and manager
async function viewAllEmployees() {
    const result = await db.query(
        "SELECT employee.id AS id, employee.first_name AS first_name, employee.last_name AS last_name, roles.title AS title, department.name AS department, roles.salary AS salary, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employee LEFT JOIN roles on employee.roles_id = roles.id LEFT JOIN department on roles.department_id = department.id LEFT JOIN employee m on employee.manager_id = m.id;"
        );
    console.table(result);
    menu();
};

// Add a new department
async function addDepartment() {
    // prompt the user for the "name" of the department
    const answers = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'departmentName'
        }
    ]);

    // Run the query to INSERT INTO department (name) VALUES ("Service")
    await db.query(
        "INSERT INTO department (name) VALUES (?)",
        [answers.departmentName]
    );

    console.log(`Added ${answers.departmentName} to the database`);
    menu();
};

// Add a new role
async function addRole() {
// Get the existing departments from the 'department' table
    const department = await db.query("SELECT * FROM department");

    const departmentChoices = department.map( department => ({
        name: department.name,
        value: department.id
    }));

    // prompt the user for the "title", "salary", and "department" for the role 
    const answers = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the role?',
            name: 'roleName'
        },
        {
            type: 'input',
            message: 'What is the salary of the role?',
            name: 'roleSalary'
        },
        {
            type: 'list',
            message: 'Which department does the role belong to?',
            name: 'roleDepartment',
            choices: departmentChoices
        }
    ]);

    // Run the query to INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)
    await db.query(
        "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)",
        [answers.roleName, answers.roleSalary, answers.roleDepartment]
    );

    console.log(`Added ${answers.roleName} to the database`);
    menu();

};

// Add an employee
async function addEmployee() {
    // Get the existing roles from the "roles" table
    const roles = await db.query("SELECT * FROM roles");

    const roleChoices = roles.map( roles => ({
        name: roles.title,
        value: roles.id
    }));

    console.log (roleChoices);

    // Get existing employees from the "employee" table
    const employees = await db.query("SELECT * FROM employee");

    const employeeChoices = employee.map( employee => ([
        name: CONCAT(employee.first_name, ' ', employee.last_name),

    ]))


    // prompt the user for their "first_name", "last_name", "role", and "manager"
    const answers = await inquirer.prompt([
        {
            type: 'input',
            message: "What is the employee's first name?",
            name: 'firstName'
        },
        {
            type: 'input',
            message: "What is the employee's last name?",
            name: 'lastName'
        },
        {
            type: 'list',
            message: "What is the employee's role?",
            name: 'role',
            choices: roleChoices
        },
        {
            type: 'list',
            message: "Who is the employee's manager?",
            name: 'manager',
            choices:
        }

    ])
}

// Update an employee role

menu();