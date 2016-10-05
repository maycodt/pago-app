var MP = require ("mercadopago");
var express = require ('express');
var app = express();

var PORT = process.env.PORT || 3000;

//var middleware = require ('./middleware') 


//app.use(middleware.requireAuthentication);

app.get('/', function(req, res) {

var body = req.body;

var mp = new MP ("TEST-1443215904820832-091611-fb6e772702cb44fa71fbd19024115895__LC_LD__-156286933");

var doPayment = mp.post ("/v1/payments",
	{
		"transaction_amount": 100,
		"token": "fb6e772702cb44fa71fbd190241158", //body.card_token
		"description": "Suscripción 90 días",
		"installments": 1,
		"payment_method_id": "visa",//body.payment_method_id,
		"payer": {
			"email": "test_user_19653727@testuser.com"
		}
	});

doPayment.then (
	function (payment) {
		res.json(payment);
		//console.log (payment);
	},
	function (error){
		res.error;
		//console.log (error);
	});
});

app.listen(PORT, function(){
	console.log('Server started!')
});
