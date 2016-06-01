var fs = require('fs');

var myPath = process.argv[2];

text = fs.readFileSync(myPath);

buf = text.toString();

console.log(buf.split('\n').length - 1);