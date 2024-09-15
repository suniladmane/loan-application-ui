const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'root', // Replace with your MySQL password
    database: 'loan_application_db'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

app.post('/submit', (req, res) => {
    const { fullName, dob, email, phone, loanAmount, loanTerm, employerName, designation, salary, yearsInJob } = req.body;

    const query = 'INSERT INTO applications (fullName, dob, email, phone, loanAmount, loanTerm, employerName, designation, salary, yearsInJob) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [fullName, dob, email, phone, loanAmount, loanTerm, employerName, designation, salary, yearsInJob];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Server Error');
            return;
        }
        res.send('Form submitted successfully');
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
