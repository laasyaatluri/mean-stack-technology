var http=require('http');
http.createServer(function(req,res)
{
	res.writeHead(200,{'content-type':'text/plain'});
	res.write("<body bgcolor='yellow'>");
	res.write("<h1>welcome to Node js</h1>");
	res.end();
     }).listen(9090);
console.log("server 9090 started");