var MP = require ("mercadopago");

var mp = new MP ("TEST-1443215904820832-091611-fb6e772702cb44fa71fbd19024115895__LC_LD__-156286933");

var doPayment = mp.post ("/v1/payments",
	{
		"transaction_amount": 100,
		"token": "9f858377f54b174830dfe9ab6c575af4",
		"description": "Suscrpción 90 días.",
		"installments": 1,
		"payment_method_id": "visa",
		"payer": {
			"email": "test_user_19653727@testuser.com"
		}
	});

doPayment.then (
	function (payment) {
		console.log (payment);
	},
	function (error){
		console.log (error);
	});