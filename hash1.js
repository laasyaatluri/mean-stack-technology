const crypto=require('crypto');
const secret='abcdefg';
const hash=crypto.createHmac('sha256',secret)
	         //.update('welcome to javatpoint')
		 .update('cse-c')
	         .digest('hex');
console.log(hash);