var pdc = require('pdc');
 
// optional, if pandoc is not in PATH 
var path = require('path');
pdc.path = 'pandoc';
 
pdc('word', 'docx', 'html', function(err, result) {
  if (err)
    throw err;
 
  console.log(result);
});