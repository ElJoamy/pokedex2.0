require('dotenv').config();

let mysql = require('mysql');
//TODO: Change to environment variables
let conection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

conection.connect(function (err) {
    if (err){
        return console.error('error: ' + err.message);
    }
    console.log('Connected to MySQL');
});

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

module.exports = conection;