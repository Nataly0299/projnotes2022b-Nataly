#!/usr/bin/env node

/**
 * Module dependencies.
 */


//ES5
//var app = require('../app');
//ES6
import app from"../app"
import debug from 'debug';
import http from 'http';
//var debug = require('debug')('projnotes-2022b:server');
//var http = require('http');

/**
 * Get port from environment and store in Express.
 */

//var port = normalizePort(process.env.PORT || '3000');
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */
//app es una funcion de tipo middleware(codigointermediario)
//(req,res) =>{...res.send("algo")}
//var server = http.createServer(app);
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    //? 'Pipe ' + port  
    ? `Pipe ${port}` 
    //: 'Port ' + port;
    : `Port ${port}`


  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      //console.error(bind + ' requires elevated privileges');
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      //console.error( bind + ' is already in use');
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  
  const addr = server.address();
  const {port} = addr;
  //var bind = typeof addr === 'string'
  var bind = typeof addr === 'string' 
   // ? 'pipe ' + addr
    //: 'port ' + addr.port;
    ? `pipe ${addr}` 
    : `port ${port}` ;
  debug('Listening on ' + bind);
  //Desestrecuturando port de addr
  console.log(`Listening at http://localhost:${port}`);

}
