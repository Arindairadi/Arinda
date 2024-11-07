const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors()););

// Connect to MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Default XAMPP MySQL user
    password: '', // Default XAMPP MySQL password (leave empty if none)
    database: 'arinda'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// API to get attendance records
app.get('/attendance', (req, res) => {
    db.query('SELECT * FROM attendance', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// API to add a new attendance record
app.post('/attendance', (req, res) => {
    const record = req.body;
    db.query('INSERT INTO attendance SET ?', record, (err, result) => {
        if (err) throw err;
        res.send('Attendance record added');
    });
});

// Serve HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
