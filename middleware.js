var middleware = {
	requireAuthentication: function(req, res, next){
		conosle.log('fila privada hecha!');
		next();
	}
}

module.exports = middleware;