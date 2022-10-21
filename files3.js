//const fs = require('fs');
//fs.unlink(filename, callback) 
var fs = require('fs');
fs.unlink('sample.txt', function (err) { 
                        if (err)
        			console.log(err);
                        else
       	 	console.log('File Deleted  !');
});
