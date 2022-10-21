var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'First File operation(creating file)', function (err) {
  if (err) throw err;
  console.log('Succefully Created');
});