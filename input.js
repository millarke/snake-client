// const net = require('net');
let connection;

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  // console.log(conn);
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // console.log(connection);
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  } else if (key === 'q') {
    connection.write("Say: snek snek snek");
  } else if (key === 'e') {
    connection.write("Say: outta my way");
  } else if (key === 'r') {
    connection.write("Say: I win");
  } else if (key === 'f') {
    connection.write("Say: hi eileen");
  }
};

module.exports = {setupInput};

// WHERE GO?? key undefined!
// \u0003 maps to ctrl+c input

// setupInput();