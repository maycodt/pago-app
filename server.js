var express = require ('express');
var app = express();

/*var middleware = {
	requireAuthentication: function(req, res, next){
		conosle.log('fila privada hecha!');
		next();
	}
}*/

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
