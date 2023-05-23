const { MOVEUP, MOVELEFT, MOVEDOWN, MOVERIGHT, MSG } = require('./constants');

let connection;


const handleUserInput = function (data) {
  if(data === `\u0003`){
    process.exit();
  }
if (data === MOVEUP)
      connection.write("Move: up");
    
      if (data === MOVELEFT)
      connection.write("Move: left");
  
      if (data === MOVEDOWN)
      connection.write("Move: down");
      
      if (data === MOVERIGHT)
      connection.write("Move: right");
      
      if (MSG [data]){
        connection.write(MSG [data]); 
      
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

module.exports = { setupInput };