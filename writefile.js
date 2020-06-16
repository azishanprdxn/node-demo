var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'I am Zishan!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});