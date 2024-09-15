/*const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',     // Replace with your MySQL host
  user: 'root',          // Replace with your MySQL user
  password: 'root',  // Replace with your MySQL password
  database: 'first' // Replace with your MySQL database name
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Example query
connection.query('SELECT NOW()', (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Current time:', results[0]['NOW()']);
});

// End the connection when done
connection.end((err) => {
  if (err) {
    console.error('Error ending the connection:', err);
    return;
  }
  console.log('Connection closed');
});
*/
var mysql = require('mysql2');  
var con = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "root"  
});  
con.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  
});  