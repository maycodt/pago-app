var express = require ('express');
var app = express();

var middleware = require ('./middleware') 

//app.use(middleware.requireAuthentication);

app.get('/', function(req, res) {
	res.send('Hello Mayco!');
});

app.get('/pagar', function(req, res) {
	res.send('Dale paga monoooo!');
});

app.listen(3000, function(){
	console.log('Server started!')
});
