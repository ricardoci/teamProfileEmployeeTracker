INSERT INTO department (name)
VALUES ('Sales'), ('Engineering'), ('Finance'), ('Legal');

INSERT INTO role (title, salary, department_name ,department_id)
VALUES 
('Sales Lead', 100000, 'Sales',1),
('Salesperson', 80000,'Sales' ,1),
('Lead Engineer', 150000, 'Engineering',2),
('Software Engineer', 120000,'Engineering' ,2),
('Account Manager', 160000,'Finance', 3),
('Accountant', 125000,'Finance' ,3),
('Legal Team Lead', 250000, 'Legal',4),
('Lawyer', 190000,'Legal' ,4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('John', 'Doe', Sales, NULL),
('Mike', 'Chan', Legal, 1),
('Bob', 'Johnson', Engineering, NULL),
('Alice', 'Lee', Finance, 3);

