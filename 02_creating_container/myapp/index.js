var exp = require('express');
var app = exp()

app.get('/', function(req, res){
console.log('venkat server req');
res.send('hello wrod!');
});

var server = app.listen(3000, function(){
	var h = server.address().address;
	var p = server.address().port;
	console.log('example app listening at http://%s%s', h, p);
});
