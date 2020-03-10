const fs = require("fs");

let newLine = fs.readFileSync(process.argv[2]);
console.log(newLine.toString().split('\n').length-1);
