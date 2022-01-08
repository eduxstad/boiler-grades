# [www.Boilergrades.com](https://www.boilergrades.com)
This repository stores the code and data for the Boilergrades website. 
## Development
This project uses full stack javascript with node/express serving the backend in `index.js`. The folder `boiler-grades-web` contains a Vue project which compiles into the frontend at `boiler-grades-web/dist`.
To install a local version of the frontend run
```
$ cd boiler-grades-web && npm install
```
and then run it with 
```
$ npm run serve
```
this will start a local vue-cli webserver for development.


To install and run a local version of the server run (you'll need to configure postgresql and import a local copy of the database)
```
$ npm install && node index.js
```
Make sure to change the proxy server in `boiler-grades-web/vue.config.js`.
## Bugs
To report a bug please [create a new issue](https://github.com/eduxstad/boiler-grades/issues/new).

## Updating the dataset
Updating the dataset with more recent data will require filing a new [Public Records](https://www.purdue.edu/legalcounsel/public/index.html) request with Purdue. If interested, here is the template I used to request the data:


> Hello my name is Erik Duxstad,
> 
> Address: [ADDRESS]
> Email: [email]@purdue.edu
> Phone Number: [NUMBER]
> 
> I am requesting the grade distributions by percent and/or letter grade, for every class and instructor for the last five years at the West Lafayette Campus of Purdue 
> University. Please ensure the documents are FERPA compliant. I request that the information is in CSV format, and in digital format. Preferably in the form:
> 
> Course Subject, Course Number, Course Title, Course Section, Term/Semester, Primary Instructor, A+, A, A-, B+, B, B-, C+, C, C-, D+, D, D-, F, W, Average Grade in GPA.
> 
> If putting in in that form is extra work, comma separated value format with the requisite information is acceptable.
> 
> Please notify me of any expenses prior to incurring them.
> 
> Thank you,
> Erik Duxstad

It took about two months for Purdue to retrieve the data. Once I received the data I converted it to CSV and sanitized it with `grades.py`. 

## License
This project is licensed under GNU GPL v3.

