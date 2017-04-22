//load node modules needed
var mysql = require("mysql");
var inquirer = require("inquirer");
//create connection to mysql
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "1107",
  database: "bamazon_db"
});
// connect to the mysql server and sql database
// connection.connect (function(err) {
// 	console.log("Connected as id:" +connection.threadId);
// });
connection.connect(function(err) {
  if (err) throw err;
  console.log("________________________________________________");
  console.log("Welcome to SmartMart!!!");
  storeItems();
});

var storeItems= function() {
        var query = "SELECT * FROM products";
        connection.query(query, function(err, res) {
        console.log("________________________________________________");
        console.log('ItemID' + " | " + 'Product'+ " | " + 'Department' + " | " + 'Price' + " | " + 'Quantity');
        console.log("________________________________________________");
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }
        console.log("________________________________________________");
            chooseItem();
        });
    };

function chooseItem() {
    inquirer.prompt([{
        type: "input",
        name: "itemID",
        message: "Please provide the itemID for the product you are buying?",

    }]).then(function(product) {
        var itemID = product.itemID;
        inquirer.prompt([{
            type: "input",
            name: "itemQuantity",
            message: "How many would you like to buy?",
        }]).then(function(quantity) {
            itemQuantity = quantity.itemQuantity
            checkStock(itemID, itemQuantity);
        }); //end of inquirer.prompt.itemID
    }); //end of inquirer.prompt.itemQuantity
}; //end of chooseItem

function checkStock(itemID, itemQuantity) {
    connection.query('SELECT stock_quantity FROM products WHERE item_id=?', [itemID], function(err, res) {
        if (err) throw err;
        currentStock = res[0].stock_quantity;
        if (currentStock < itemQuantity) {
            console.log("Insufficient quantity! Please select another item!");
            chooseItem();
        } else {
            var newStock = currentStock - itemQuantity;
            placeOrder(itemID, newStock, itemQuantity);
        }
    });
} //end of checkStock

function placeOrder(itemID, newStock, itemQuantity) {
  connection.query("UPDATE products SET ? WHERE ?", [{
        stock_quantity: newStock
    }, {
        item_id: itemID
    }], function(err, res) {
        if (err) throw err;
        connection.query("SELECT price FROM products WHERE item_id=?", [itemID], function(err, res) {
            if (err) throw err;
            itemPrice = res[0].price;
            var orderTotal = itemPrice * itemQuantity
            console.log("Your total is $ " + orderTotal + "." + "  Thank you for shopping at SmartMart, where every penny counts!");
            connection.end(function(err) {
                if (err) {
                    throw err;
                }
            })
        });
    });
} //end of fufillOrder