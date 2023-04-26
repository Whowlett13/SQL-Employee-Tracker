INSERT INTO department (id, name)
VALUES
(1, 'Sales'),
(2, 'Engineering'),
(3, 'Finance'),
(4, 'Legal'),
(5, 'Human Resources'),
(6, 'Public Relations'),
(7, 'Research and Development'),
(8, 'Marketing');



INSERT INTO role (id, title, salary, department_id)
VALUES
-- (1, 'HR Manager', 100000, 5),
-- (2, 'Network Engineer', 80000, 2),
(3, 'Graphic Designer', 150000, 7),
(4, 'Systems Administrator', 120000, 7),
(5, 'Marketing Manager', 125000, 8),
(6, 'Sales Manager', 250000, 1),
(7, 'Accountant', 190000, 3),
(8, 'Operations Manager', 90000, 5);





INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, 'Reid', 'Young', 1, NULL),
(2, 'Sarah', 'Johnson', 2, 1),
(3, 'Emily', 'Davis', 3, NULL),
(4, 'Michelle', 'Chen', 4,  1),
(5, 'Daniel', 'Garcia', 5, NULL),
(6, 'Benjamin', 'Patel', 6, 1),
(7, 'Jasmine', 'Kim', 7,NULL),
(8, 'Dylan', 'Jones', 8, NULL);



