const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  // is this what lets me recieve msgs from the server?
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
 
  });

  // three letter initials print on snake upon load
  conn.on('connect', () => {
    conn.write('Name: BUD');
  });


  // move up once right at the beginning
  // conn.on('connect', () => {
  //   conn.write("Move: up");
  // });

  // multiple timers making the snake move at set intervals for x amount of time
  // conn.on('connect', () => {
  //   setTimeout(function() { conn.write("Move: up"); }, 100);
  //   setTimeout(function() { conn.write("Move: up"); }, 200);
  //   setTimeout(function() { conn.write("Move: up"); }, 300);
  //   setTimeout(function() { conn.write("Move: up"); }, 400);
  //   setTimeout(function() { conn.write("Move: up"); }, 500);
  // });

  // a tidier version of what i have above, moves at a set intervalautomatically
  // conn.on('connect', () => {
  //   setInterval(function() { conn.write("Move: up"); }, 500);
  // });

  
  return conn;
};

module.exports = {connect};