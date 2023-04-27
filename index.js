//importing file system
const fs = require("fs");

// Import and require mysql2
const mysql = require("mysql2");

//importing inquirer package
const inquirer = require("inquirer");

//connecting to mysql localHost
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password CHANGE SQL PASSWORD.
    password: "Soda69",
    database: "employeeTracker",
  },
  console.log(`Connected to the schema database.`)
);

//Throw error if error occurs connecting to data base.
db.connect((err) => {
  if (err) {
    console.error(
      `Error connecting to database: 'employeeTracker' + err.stack`
    );
    return;
  }
  console.log("Connected to database as id " + db.threadId);
});

//main page Selection Questions
const questionsMain = [
  {
    //What Would you like to do?
    type: "list",
    message: "What would you like to do?",
    choices: [
      "Add Employee",
      "Update Employee Role",
      "View All Roles",
      "Add Role",
      "View All Departments",
      "Add Department",
      "Quit",
    ],
    name: "Main",
  },
];
const employeeQuestions = [
  {
    //Add Employee
    type: "input",
    message: "Add Employee",
    name: "addEmployee",
  },
  {
    //First Name of New Employee
    type: "input",
    message: "What Is The First Name Of The Employee You Would Like to Add?",
    name: "firstNameOfEmployee",
  },
  {
    //Last Name Of New Employee
    type: "input",
    message: "What Is The Last Name Of The Employee You Would Like to Add?",
    name: "lastNameOfEmployee",
  },
  {
    //The Role Of The New Employee
    type: "input",
    message: "What Is The Role Of The New Employee?",
    name: "roleOfNewEmployee",
  },
  {
    //Salary Input For New Employee
    type: "input",
    message: "What Is The Role Of This New Employee?",
    name: "salaryOfNewEmployee",
  },
  {
    //Department of New Employee
    type: "list",
    message: "Which Department Does This Role Belong To?",
    choices: [
      "Sales",
      "Engineering",
      "Finance",
      "Legal",
      "Human Resources",
      "Public Relations",
      "Research and Development",
      "Marketing",
    ],
    name: "newEmployeeAssignedDepartment",
  },
  {
    //New Employee Manager Selection
    type: "list",
    message: "Who Is The Employees Manager?",
    choices: [
      "Reid Young",
      "Sarah Johnson",
      "Emily Davis",
      "Michelle Chen",
      "Daniel Garcia",
      "Benjamin Patel",
      "Jasmine Kim",
      "Dylan Jones",
    ],
    name: "employeeManager",
  },
];

async function employees() {
  const response = await inquirer.prompt(employees);
  if (response.addEmployee === employeeQuestions);
  console.table(response[0]);
}
employees();

async function mainMenu() {
  const response = await inquirer.prompt(questionsMain);
  console.log(response);
  if (response.Main === "View All Departments") {
    viewDepartments();
  }
}
mainMenu();
//create async for roles and employees
// adding department

//department Question Prompt
const roleQuestions = [
  {
    //name of the Employee Role You'd Like the change
    type: "input",
    message: "What Is The Name Of The Employee Role You Would Like To Change?",
    name: "updateEmployeeRole",
  },
  {
    //Name Of new Role
    type: "input",
    message: "What Is The Name Of The Employee Role You Would Like To Add?",
    name: "addRole",
  },
  {
    //Name of  Department You Would Like to add
    type: "input",
    message: "What Is The Name Of The Department You Would Like To Add?",
    name: "addDepartment",
  },
  {
    //name of the role in the Newly Created Department
    type: "input",
    message: "What Is The Name Of The Role?",
    name: "newRole",
  },
  {
    //Salary of the new role
    type: "input",
    message: "What Is The Salary Of The Role?",
    name: "salaryOfNewRole",
  },
  {
    //Department Assignment for new role
    type: "list",
    message: "Which Department Does This Role Belong To?",
    choices: [
      "Sales",
      "Engineering",
      "Finance",
      "Legal",
      "Human Resources",
      "Public Relations",
      "Research and Development",
      "Marketing",
    ],
    name: "departmentAssignment",
  },
];
async function roles() {
  const response = await inquirer.prompt(roleQuestions);
  if (response.updateEmployeeRole === "Update Employee Role")
    if (response.addRole === "addRole")
      if (response.updateEmployeeRole === "addDepartment")
        if (response.newRole === "newRole")
          if (response.salaryOfNewRole === "salaryOfNewRole") roles();
  console.table(response[0]);
}
roles();

async function viewDepartments() {
  const response = await db.promise().query("SELECT * FROM department");
  console.table(response[0]);
  viewDepartments();
}
viewDepartments();

async function addDepartment() {
  const response = await db.promise().query(roleQuestions);
  if (response.addDepartment === "addDepartment");
  console.table(response[0]);
  addDepartment();
}
addDepartment();
