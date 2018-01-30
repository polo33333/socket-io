const express           = require('express');
const app               = require('express')();
const http              = require('http').Server(app);
const io                = require('socket.io')(http);
const bodyParser        = require('body-parser');
const path              = require('path');

const jwt               = require('jsonwebtoken');

const mongoose          = require('mongoose');  
const config            = require('./config');



// connect to MongoDb
var mongoDBURL = config.url;
// var options = {
//     useMongoClient: true,
// }

mongoose.connect(mongoDBURL);
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.set('superSecret', config.secret);
// API file for interacting with MongoDB
const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));


// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', "*");
    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// API location
app.use('/api', api);
const sockets = require('./server/routes/socket')(io);
app.use('/socket', sockets);


// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});



//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

// const server = http.createServer(app);

http.listen(port, () => console.log(`Server is running on localhost:${port}`));


