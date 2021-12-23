//index.js - boilder-grades
//simple node based webserver and api

const express = require('express');
const app = express();

const { Client } = require('pg');

const DB_URL = process.env.DATABASE_URL 
  || 'postgresql://localhost:5432/testDatabase';
const DB_SSL = process.env.DATABASE_URL ? { rejectUnauthroized: false } : false;
console.log("Connecting to database at URL: %s", DB_URL);
const client = new Client({
  connectionString: DB_URL,
  ssl: DB_SSL
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', 
  (err, res) => {
  if (err) throw err;
  console.log("Successfully connected to database"); 
  client.end();
});

//setup homepage
app.use('/', express.static('index'));

//start express server and use port 4040 if env not specified
let port = process.env.PORT || 4040;
app.listen(port); 
console.log("Starting boiler-grades webserver on port %d", port);
