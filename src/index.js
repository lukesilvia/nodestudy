const server = require ( "./server" );
const router = require ( "./router" );
const handlers = require ( "./handlers" );

const handle = {};
handle[ "/" ]       = handlers.start;
handle[ "/start" ]  = handlers.start;
handle[ "/upload" ] = handlers.upload;

server.start( router.route, handle );
