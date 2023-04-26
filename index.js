//using express
const express = require("express");

//importing file system
const fs = require("fs");

// Import and require mysql2
const mysql = require("mysql2");

//importing inquirer package
const inquirer = require("inquirer");

//assigning PORT number
const PORT = process.env.PORT || 3001;

//calling the app express
const app = express();

//connecting to mysql localHost
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password CHANGE SQL PASSWORD.
    password: "",
    database: "employeeTracker",
  },
  console.log(`Connected to the schema database.`)
);
//
app.use(express.json());
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
  {
    //View All employees
    type: "default",
    message: "View All Employees",
    //choices :["Reid Young", "Sarah Johnson", "Emily Davis", "Michelle Chen", "Daniel Garcia", "Benjamin Patel", "Jasmine Kim", "Dylan Jones"],
    name: "viewAllEmployees",

  }],
const employeeQuestions = [
  {
    //Add Employee
    type: "input",
    message: "Add Employee",
    name: "addEmployee",
  }
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
name:"roleOfNewEmployee"

},
{
    //Salary Input For New Employee
    type: "input",
    message: "What Is The Role Of This New Employee?",
    name:"salaryOfNewEmployee"
    
    },
    {
        //Department of New Employee
        type: "list",
        message: "Which Department Does This Role Belong To?",
        choices: ["Sales", "Engineering","Finance", "Legal", "Human Resources", "Public Relations", "Research and Development", "Marketing"],
        name: "newEmployeeAssignedDepartment"

    },
    {
        //New Employee Manager Selection
        type:"list",
        message: "Who Is The Employees Manager?",
        choices: ["Reid Young", "Sarah Johnson", "Emily Davis", "Michelle Chen", "Daniel Garcia", "Benjamin Patel", "Jasmine Kim", "Dylan Jones"],
        name: "employeeManager"
    
    
    }


];
//department Question Prompt
const departmentQuestions = [
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
    type:"input",
    message: "What Is The Name Of The Role?",
    name: "newRole",


},
{
    //Salary of the new role
    type:"input",
    message: "What Is The Salary Of The Role?",
    name: "salaryOfNewRole",


},
{
    //Department Assignment for new role
    type:"list",
    message: "Which Department Does This Role Belong To?",
    choices: ["Sales", "Engineering", "Finance", "Legal", "Human Resources", "Public Relations", "Research and Development", "Marketing"],
    name: "departmentAssignment",



},
];


app.get("employeeTracker", (req, res) => {
  const { id } = req.params;
  db.query(`SELECT department FROM employeeTracker= ?`, id, (err, rows) => {
    if (err) {
      console.error("Error getting department: " + err);
      res.status(500).send("Error getting department from database");
      return;
    }
    res.send(rows);
  });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
