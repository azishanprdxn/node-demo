var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'I am Zishan', function (err) {
  if (err) throw err;
  console.log('Saved!');
});