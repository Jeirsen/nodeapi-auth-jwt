//server.js file

const server = require('./server/config/app')();
const config = require('./server/config/env_config/config');
const db = require('./server/config/db');

//create the basic server setup 
console.log(config)
server.create(config, db);

//start the server
server.start();
