var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "1107",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});