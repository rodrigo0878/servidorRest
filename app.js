require('dotenv').config();


//const { Server } = require('http');
const Server = require('./models/server')


const server = new Server();


server.listen();









