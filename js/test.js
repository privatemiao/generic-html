$.ajax({
	url : 'http://127.0.0.1/generic/photo',
	method : 'GET',
	contentType : 'application/json',
	success : function(response) {
		console.log(response);
	},
	error : function(response) {
		console.error(response);
	}
});