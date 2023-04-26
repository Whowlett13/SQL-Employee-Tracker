INSERT INTO department(id, name,)
VALUES
(1, 'Sales'),
(2, 'Engineering'),
(3, 'Finance'),
(4, 'Legal'),
(5, 'Human Resources'),
(6, 'Public Relations'),
(7, 'Research and Development'),
(8, 'Marketing'),
(9, `${addDepartment} != {newEmployeeAssignedDepartment}`);


INSERT INTO role(id,'title', 'salary')
VALUES
(1, 'HR Manager','100,000'),
(2, 'Network Engineer','80,000'),
(3, 'Graphic Designer', '150,000'),
(4, 'Systems Administrator','120,000'),
(5, 'Marketing Manager','125,000'),
(6, 'Sales Manager','250,000'),
(7, 'Accountant','190,000'),
(8, 'Operations Manager','90,000'),
(9, `${roleOfNewEmployee}`, `${salaryOfNewEmployee} != ${salaryOfNewRole}`)




INSERT INTO employee(id,'first_name', 'last_name', 'rol_id', 'manager')
VALUES
(1, 'Reid', 'Young', 1, `${employeeManager}`),
(2, 'Sarah', 'Johnson', 2,  `${employeeManager}`),
(3, 'Emily', 'Davis',3, `${employeeManager}`),
(4, 'Michelle', 'Chen', 4, `${employeeManager}`),
(5, 'Daniel', 'Garcia', 5, `${employeeManager}`),
(6, 'Benjamin', 'Patel', 6, `${employeeManager}`),
(7, 'Jasmine', 'Kim', 7, `${employeeManager}`),
(8, 'Dylan', 'Jones', 8,  `${employeeManager}`),
(9, `${firstNameOfEmployee}`, `${lastNameOfEmployee}`, 9, `${employeeManager}`);


