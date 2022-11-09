const questions= {
    menu: [
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'menu',
            choices: [
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
                'Quit'
            ]
        }
    ],
    addDepartment: [
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'departmentName'
        }

    ],
    addRole: [
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
            choices: [
                'Engineering',
                'Finance',
                'Legal',
                'Sales',
                'Service'
            ]
        }
    ],
    addEmployee: [
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
            choices: [
                'Sales Lead',
                'Salesperson',
                'Lead Engineer',
                'Software Engineer',
                'Account Manager',
                'Accountant',
                'Legal Team Lead',
                'Lawyer',
                'Customer Service'
            ]
        },
        {
            type: 'list',
            message: "Who is the employee's manager?",
            name: 'manager',
            choices: [
                'None',
                'John Doe',
                'Mike Chan',
                'Ashley Rodriguez',
                'Kevin Tupik',
                'Kunal Singh',
                'Malia Brown',
                'Sarah Lourd',
                'Tom Allen'
            ]
        }
    ],
    updateRole: [
        {
            type: 'list',
            message: "Which employee's role do you want to update?",
            name: 'updateEmployeeRole',
            choices: [
                'John Doe',
                'Mike Chan',
                'Ashley Rodriguez',
                'Kevin Tupik',
                'Kunal Singh',
                'Malia Brown',
                'Sarah Lourd',
                'Tom Allen'
            ]
        },
        {
            type: 'list',
            message: 'Which role do you want to assign the selected employee?',
            name: 'assignRole',
            choices: [
                'Sales Lead',
                'Salesperson',
                'Lead Engineer',
                'Software Engineer',
                'Account Manager',
                'Accountant',
                'Legal Team Lead',
                'Lawyer',
                'Customer Service'
            ]
        }
    ]
};

module.exports = questions