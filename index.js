const express = require("express");
const fs = require('fs');
// Import and require mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer");
const PORT = process.env.PORT || 3001;
const app = express();
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password
    password: "",
    database: "movie_db",
  },
  console.log(`Connected to the movie_db database.`)
);
app.use(express.json());
// app.use((req, res) => {
//     res.status(404).end();
//   });
db.connect((err) => {
  if (err) {
    console.error(‘Error connecting to database: ’ + err.stack);
    return;
  }
  console.log(‘Connected to database as id ’ + db.threadId);
});

const questions = [{
    type: 'input',
    message: "What is the project title?",
    name: 'name',



},

{
    type: 'input',
    message: "Write a description of functionality",
    name: 'description',



},

{
    type: 'input',
    message: "Provide a link to the deployed application",
    name: 'linktodeployedapplication',



},
{
    type: 'input',
    message: "Provide a screen shot of deployed application",
    name: 'Screenshot',



},
{
    type: 'checkbox',
    message: "Technologies used to create the project",
    choices: ["CSS", "Bootstrap", "HTML", "Javascript", "React"],
    name: 'BuildWith',



},
{
    type: 'list',
    message: "Provide the license used in this application",
    choices: ["MIT", "Apache2.0", "GPL3.0", "BSD3", "None"],
    name: 'License',



},
{
    type: 'input',
    message: "What was the year of creation?",
    name: 'Year',



},
{
    type: 'input',
    message: "What is the name of the creator?",
    name: 'creatorName',



}];
















app.get('/api/movie/:id/reviews', (req, res) => {
    const { id } = req.params;
    db.query(`SELECT review FROM reviews WHERE movie_id = ?`, id, (err, rows) => {
      if (err) {
        console.error('Error getting reviews: ' + err.stack);
        res.status(500).send('Error getting reviews from database');
        return
      }
      res.send(rows);
  });
  });
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
  });