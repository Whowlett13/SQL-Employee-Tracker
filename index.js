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
    name: "first_name",
  },
  {
    //Last Name Of New Employee
    type: "input",
    message: "What Is The Last Name Of The Employee You Would Like to Add?",
    name: "last_name",
  },
  {
    //The Role Of The New Employee
    type: "input",
    message: "What Is The Role Of The New Employee?",
    name: "role_id",
  },
  {
    //Salary Input For New Employee
    type: "input",
    message: "What Is The Role Of This New Employee?",
    name: "salary",
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
  const response = await inquirer.prompt(employeeQuestions);

  db.query("INSERT INTO employee SET ?", response);
  // console.log(response);
  console.table(response);
  //
  // // {
  //   if (response.addEmployee === "Add Employee");
  // //   console.table(response[0]);
  // }
  mainMenu();
}

//Main Menu Function
async function mainMenu() {
  const response = await inquirer.prompt(questionsMain);
  console.log(response);
  if (response.Main === "View All Departments") {
    viewDepartments();
  }
  if (response.Main === "Add Employee") {
    employees();
  }
  if (response.Main === "View All Roles") {
    viewRoles();
  }

  
//create async for roles and employees

//Department Question Prompt
const roleQuestions = [
  {
    //name of the Employee Role You'd Like the change
    type: "input",
    message: "What Is The Name Of The Employee Role You Would Like To Change?",
    name: "updateEmployeeRole",
  },
 
  // {
  //   //Name of  Department You Would Like to add
  //   type: "input",
  //   message: "What Is The Name Of The Department You Would Like To Add?",
  //   name: "addDepartment",
  // },
  {
    //name of the role in the Newly Created Department
    type: "input",
    message: "What Is The Name Of The Role?",
    name: "title",
  },
  {
    //Salary of the new role
    type: "input",
    message: "What Is The Salary Of The Role?",
    name: "salary",
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
    name: "department_id",
  },
];
const addRole = [
  {
    //Name Of new Role
    type: "input",
    message: "What Is The Name Of The Employee Role You Would Like To Add?",
    name: "addRole",
  },
];
//Roles function for adding selected data to the table
async function roles() {
  const response = await inquirer.prompt(roleQuestions);

  db.query("INSERT INTO role SET ?", response);
  // console.log(response);
  console.table(response[0]);

  mainMenu();
}
const addDepartment = [
  {
    //Name of  Department You Would Like to add
    type: "input",
    message: "What Is The Name Of The Department You Would Like To Add?",
    name: "addDepartment",
  },
];
// adding department
async function newDepartment() {
  const response = await inquirer.prompt(addDepartment);

  db.query("INSERT INTO department SET ?", response);
  // console.log(response);
  console.table(response);
newDepartment();



mainMenu();
  
}

//View Departments Function
async function viewDepartments() {
  const response = await db.promise().query("SELECT * FROM department");

  console.table(response[0]);
  mainMenu();
}
//View All Roles Function
async function viewRoles() {
  const response = await db.promise().query("SELECT * FROM role");

  console.table(response[0]);
  mainMenu();
}
// viewDepartments();

// viewRoles();
// roles();

// employees();

mainMenu();
