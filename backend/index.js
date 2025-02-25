require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// MySQL Connection Without Database to Create Database First
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || ''
});

// Connect and Create Database if Not Exists
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('MySQL Connected...');

        // Create the database if it doesn't exist
        db.query(`CREATE DATABASE IF NOT EXISTS db_swiftgo`, (err) => {
            if (err) {
                console.error('Error creating database:', err);
            } else {
                
                console.log('Database db_swiftgo created or already exists.');
            }
        });

        // Connect to the newly created database
        db.changeUser({ database: 'db_swiftgo' }, (err) => {
            if (err) {
                console.error('Error switching to db_swiftgo:', err);
            } else {
                console.log('Using database db_swiftgo.');

                // Create products table if it doesn't exist with 'category' column
                const createTableQuery = `
                CREATE TABLE IF NOT EXISTS foods (
                    id INT PRIMARY KEY AUTO_INCREMENT,
                    image VARCHAR(255) NOT NULL,
                    title VARCHAR(100) NOT NULL,
                    price DECIMAL(10,2) NOT NULL
                )`;

                db.query(createTableQuery, (err) => {
                    if (err) {
                        console.error('Error creating table:', err);
                    } else {
                        console.log('Foods table created or already exists.');
                    }
                });
            }
        });
    }
});

app.get('/item', (req, res) => {
    const query = 'SELECT * FROM foods';
    db.query(query, (err, result) => {
        if (err) {
            console.error('Error fetching food items:', err);
            res.status(500).send('Error fetching food items');
        } else {
            res.json(result);
        }
    });
});


// Create a new food item
app.post('/api/foods', (req, res) => {
    const { title, image, price } = req.body;
    const query = 'INSERT INTO foods (title, image, price) VALUES (?, ?, ?)';
    db.query(query, [title, image, price], (err, result) => {
        if (err) {
            console.error('Error adding food:', err);
            res.status(500).send('Error adding food');
        } else {
            res.status(201).send('Food added successfully');
        }
    });
});

// Get all food items
app.get('/api/foods', (req, res) => {
    const query = 'SELECT * FROM foods';
    db.query(query, (err, result) => {
        if (err) {
            console.error('Error fetching foods:', err);
            res.status(500).send('Error fetching foods');
        } else {
            res.json(result);
        }
    });
});

// Get a specific food item by ID
app.get('/api/foods/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM foods WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error fetching food:', err);
            res.status(500).send('Error fetching food');
        } else {
            res.json(result[0]);
        }
    });
});

// Edit a food item
app.put('/api/foods/:id', (req, res) => {
    const { id } = req.params;
    const { title, image, price } = req.body;
    const query = 'UPDATE foods SET title = ?, image = ?, price = ? WHERE id = ?';
    db.query(query, [title, image, price, id], (err, result) => {
        if (err) {
            console.error('Error updating food:', err);
            res.status(500).send('Error updating food');
        } else {
            res.send('Food updated successfully');
        }
    });
});

// Delete a food item
app.delete('/api/foods/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM foods WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error deleting food:', err);
            res.status(500).send('Error deleting food');
        } else {
            res.send('Food deleted successfully');
        }
    });
});



// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});