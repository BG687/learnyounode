var fs = require('fs'); 

var buf = fs.readFileSync(process.argv[2]);
buf.toString();
buf.split("/n");

totalLines = buf.length + 1; 

console.log(totalLines);