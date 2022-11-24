//index.js - boilder-grades
//simple node based webserver and api
//postgres backend for db

const express = require('express');
const app = express();

const { Client } = require('pg');

const DB_URL = process.env.DATABASE_URL 
  || 'postgresql://localhost:5432/boilerGrades';
// const DB_SSL = process.env.DATABASE_URL ? { rejectUnauthorized: false } : false;
console.log("Connecting to database at URL: %s", DB_URL);
const client = new Client({
  connectionString: DB_URL,
  // ssl: DB_SSL
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', 
  (err, res) => {
  if (err) throw err;
  console.log("Successfully connected to database"); 
  //client.end();
});

//redirect to https
app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
        if (req.headers['x-forwarded-proto'] !== 'https')
            // the statement for performing our redirection
            return res.redirect('https://' + req.headers.host + req.url);
        else
            return next();
    } else
        return next();
});

//setup homepage
app.use('/', express.static('boiler-grades-web/dist'));

app.get('/api/grades', async function (req, res) {
  let instructor = req.query.instructor;
  let course = req.query.course;
  let subject = req.query.subject;
  let subject_query = 'SELECT * FROM grades WHERE subject=$1 LIMIT 500;';
  let course_query = 'SELECT * FROM grades WHERE subject=$1 AND course_num=$2';
  let instructor_query = 'SELECT * FROM grades WHERE instructor=$1';
  if (instructor) {
    client.query(instructor_query, [instructor]).then(dbRes => {
      res.json(dbRes.rows);
    }).catch(e => res.send(e.stack));
  } else if (course) {
    client.query(course_query, course.split(' ')).then(dbRes => {
      res.json(dbRes.rows);
    }).catch(e => res.send(e.stack));
  } else if (subject) {
    client.query(subject_query, [subject]).then(dbRes => {
      res.json(dbRes.rows);
    }).catch(e => res.send(e.stack));
    //res.send(subject);
  } else {
    res.send('Malformed request. You must parameterize an instructor, course, or subject.');
  }
  return;
});

app.get('/api/indexes', async function (req, res) {
  let instructor_query = 'SELECT DISTINCT instructor from grades;';
  let course_query = 'SELECT DISTINCT subject, course_num from grades;';
  let instructors = [];
   
  try {
    const dbRes = await client.query(instructor_query);
    for (const row of dbRes.rows) {
      instructors.push(row['instructor']);
    }
    //res.json(instructors);
  } catch (err) {
    console.log(err.stack);
  }
  try {
    const dbRes = await client.query(course_query);
    for (const row of dbRes.rows) {
      instructors.push(row['subject'] + row['course_num']);
    }
  } catch (err) {
    console.log(err.stack);
  }
  res.json(instructors);

});

//start express server and use port 4040 if env not specified
let port = process.env.PORT || 4040;
app.listen(port); 
console.log("Starting boiler-grades webserver on port %d", port);
