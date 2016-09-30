var express = require ('express');
var app = express();

var PORT = process.env.PORT || 3000;

//var middleware = require ('./middleware') 


//app.use(middleware.requireAuthentication);

app.get('/', function(req, res) {
	res.send('Hello Mayco!');
});

app.get('/pagar', function(req, res) {
	//res.send('Dale paga monoooo!');
	var crearPago = require ('./crearPago')
});

app.listen(PORT, function(){
	console.log('Server started!')
});
