const { connect } = require("./client");

const handleUserInput = function (data) {
  if(data === `\u0003`){
    console.log("Exit")
    process.exit();
  }
  console.log("Data received:", data)
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

console.log("Connecting ...");
connect();
setupInput(); 