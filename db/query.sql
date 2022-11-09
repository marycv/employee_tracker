SELECT employee.id AS id, employee.first_name AS first_name, employee.last_name AS last_name, roles.title AS title, department.name AS department, roles.salary AS, CONCAT(m.first_name, ' ', m.last_name) AS manager
FROM employee 
LEFT JOIN roles ON employee.roles_id = roles.id
LEFT JOIN department ON roles.department_id = department.id
LEFT JOIN employee m ON employee.id = m.manager_id