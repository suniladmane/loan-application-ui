const mysql = require('mysql2/promise');

async function connectToDatabase() {
  let connection;
  try {
    // Create a connection to the database
    connection = await mysql.createConnection({
      host: 'localhost',     // Replace with your MySQL host
      user: 'root',          // Replace with your MySQL user
      password: 'password',  // Replace with your MySQL password
      database: 'myDatabase' // Replace with your MySQL database name
    });

    console.log('Connected to MySQL');

    // Example query
    const [rows, fields] = await connection.execute('SELECT NOW()');
    console.log('Current time:', rows[0]['NOW()']);
    
  } catch (err) {
    console.error('Error connecting to MySQL or executing query:', err);
  } finally {
    if (connection) {
      await connection.end();
      console.log('Connection closed');
    }
  }
}

connectToDatabase();
