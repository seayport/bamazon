# bamazon
List of coding activities to create a Bamazon "SmartMart"

1. Created bamazon_db in mySQL 
		CREATE database bamazon_db;

2. Created table called "products" see "bamazonschema.sql"

		USE bamazon_db;
		CREATE TABLE products (
		  item_id INTEGER(11) AUTO_INCREMENT NOT NULL, 
		  product_name  VARCHAR(100) NULL, 
		  department_name VARCHAR(100) NULL, 
		  price DECIMAL(10,2) NULL, 
		  stock_quantity INTEGER(11) NULL,
		  PRIMARY KEY (item_id)
		);

3. See file "bamazon_products.sql" these 10 items were inserted into the "Products Table"
with the 5 required columns

	USE bamazon_db;
	INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
	VALUES (40100, "iphone", "electronics", 749.99, 100);
	INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
	VALUES (40200, "laptop", "electronics", 649.99, 100);
	INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
	VALUES (40300, "smartTV", "electronics", 549.99, 100);
	INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
	VALUES (50100, "rug", "home", 169.99, 9);
	INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
	VALUES (50200, "sofa", "home", 2350.00, 1);
	INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
	VALUES (50300, "lamp", "home", 35.49, 2);
	INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
	VALUES (70300, "doghouse", "Pets", 123.99, 1);
	INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
	VALUES (60100, "crib", "baby", 269.99, 3);
	INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
	VALUES (60200, "diaperbin", "baby", 23.00, 11);
	INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
	VALUES (60300, "nightlite", "baby", 5.49, 12);

4. see "BamazonTableCapture" for grid in mySQL with starting inventory
 
5. Created javascript file "bamazoncustomer.js"

6. loaded node packages mySQL and inquirer

7.  confirmed connection with mysql server and sql database
// connection.connect (function(err) {
// 	console.log("Connected as id:" +connection.threadId);
// });

8. wrote code to display table for customer to select an item see "NightlitesCapture" &
	when more than one item is selected total is accurately calculated

9. Code also updates inventory as Items are bought see "TotalcalculatedCapture" 3 iphones
ItemID 40300 are bought when inventory was at 100 then see "NotInStockCapture" iphone inventory is now 97

10. Code also tells the customer when inventory is out and asks them to buy another item see "NotInStockCapture"