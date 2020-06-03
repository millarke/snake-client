const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // is this what lets me recieve msgs from the server?
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}

console.log('Connecting ...');
connect();