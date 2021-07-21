#!/usr/bin/env node

/**
 * Module dependencies.
 */

import fs from 'fs';
import path from 'path';
import app from '../app.js';
import debugLib from 'debug';
import http from 'http';
import https from 'https';

var debug = debugLib('myapp:server');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '8000');
app.set('port', port);
console.log(__dirname);
const key = fs.readFileSync(path.join(__dirname, '../../keys/localhost.key'));
const cert = fs.readFileSync(path.join(__dirname, '../../keys/localhost.crt'));

/**
 * Create HTTP server.
 */

var server = https.createServer({ key, cert }, app);

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

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
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
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
