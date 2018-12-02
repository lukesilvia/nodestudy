const start = () => {
	console.log( "Request handler 'start' was called." );
	return "Start";
};

const upload = () => {
	console.log( "Request handler 'upload' was called." );
	return "Upload";
};

exports.start = start;
exports.upload = upload;
