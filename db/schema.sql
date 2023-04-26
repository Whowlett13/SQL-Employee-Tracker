DROP DATABASE IF EXISTS employeeTracker;
CREATE DATABASE employeeTracker;
USE employeeTracker;

CREATE TABLE department (
id INT,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE role (
id INT,
 PRIMARY KEY (id),
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT,
FOREIGN KEY (department_id)
REFERENCES department(id)
);

CREATE TABLE employee (
id INT,
 PRIMARY KEY (id),
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT,
FOREIGN KEY (role_id)
REFERENCES role(id),
manager_id INT,
FOREIGN KEY (manager_id)
REFERENCES employee(id)
);
