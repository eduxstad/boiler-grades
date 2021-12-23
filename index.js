//index.js - boilder-grades
//simple node based webserver and api

const express = require('express');
const app = express();

//setup homepage
app.use('/', express.static('index'));

//start express server and use port 4040 if env not specified
let port = process.env.PORT || 4040;
app.listen(port); 
console.log("Starting boiler-grades webserver on port %d", port);
