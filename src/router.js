const route = ( handle, pathname ) => {
	console.log( "About to route a request for " + pathname );
	if ( typeof handle[ pathname ] === "function" ) {
		return handle[ pathname ]();
	} else {
		console.log( "No request handler for " + pathname );
		return "404 Not Found";
	}
};

exports.route = route;
