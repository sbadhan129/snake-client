const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:"localhost" ,
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write("Name: SSB")
    //conn.write("Move: up")

  });

  conn.on("data", (data) => {
    console.log("Server Said :", data);
  });

  /*setInterval(() => {
    conn.write("Move: up");
  }, 50);*/

  return conn;
};

module.exports = { connect };