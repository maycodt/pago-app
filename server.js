var MP = require ("mercadopago");
var express = require ('express');
var app = express();

var PORT = process.env.PORT || 3000;

//var middleware = require ('./middleware') 


//app.use(middleware.requireAuthentication);

app.get('/', function(req, res) {
	res.send('Hello Mayco!');
});

app.get('/pagar', function(req, res) {
	res.send('Dale paga mono!');
	//var crearPago = require ('./crearPago')
});

// POST /todos
app.post('/renovarSuscripcion', function (req, res) {
	/*var body = _.pick(req.body, 'description', 'completed');

	if (!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0) {
		return res.status(400).send();
	}

	body.description = body.description.trim();	
	body.id = todoNextId++;

	todos.push(body);
	
	res.json(body);*/

var body = req.body;

var mp = new MP ("TEST-1443215904820832-091611-fb6e772702cb44fa71fbd19024115895__LC_LD__-156286933");

var doPayment = mp.post ("/v1/payments",
	{
		"transaction_amount": 100,
		"token": body.card_token,
		"description": "Suscripción 90 días",
		"installments": 1,
		"payment_method_id": body.payment_method_id,
		"payer": {
			"email": "test_user_19653727@testuser.com"
		}
	});

doPayment.then (
	function (payment) {
		//res.payment
		console.log (payment);
	},
	function (error){
		//res.error
		console.log (error);
	});
});

app.listen(PORT, function(){
	console.log('Server started!')
});
