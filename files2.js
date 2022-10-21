//const fs = require('fs');
//fs.rename(existingfilename, newfilename, callback) 
var fs = require('fs');
fs.rename('test.txt', 'modify.txt', function (err) { 
                        if (err)
        			console.log(err);
                        else
       	 	console.log('File Name Changed  !');
});
