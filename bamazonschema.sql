CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL, 
  product_name  VARCHAR(100) NULL, 
  department_name VARCHAR(100) NULL, 
  price DECIMAL(10,2) NULL, 
  stock_quantity INTEGER(11) NULL,
  PRIMARY KEY (item_id)
);