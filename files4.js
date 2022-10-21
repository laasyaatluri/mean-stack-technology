var fs = require('fs'); 
 fs.readFile('sample.txt', 'utf8',function (err, data) 
                                             { 
                                                if (err) throw err;                         
                                                console.log(data); 
	fs.writeFile('test.txt', data, function (err) { 
                        if (err)
        			console.log(err);
                        else
       	 console.log('Write operation complete.');
              });

         });
     console.log('Open a File to Reading');