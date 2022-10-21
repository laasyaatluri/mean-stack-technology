var fs = require('fs');

fs.appendFile('test.txt', 'welcome to node js!', function (err) { 
                        if (err)
        			console.log(err);
                        else
       	 	console.log('Append operation complete.');
});
