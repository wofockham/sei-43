// A simple HTTP web server in Node with just the Standard Library

const http = require('http'); // Node Standard Library

http.createServer((req, res) => {
  console.log(`Serving request: ${ req.method } ${ req.url }`); // El cheapo logging.

  if (req.url === '/groucho') {
    res.end('Hello from Groucho');
  } else if (req.url === '/harpo') {
    res.end('Hello from Harpo');
  } else {
    res.end('Hello from no one in particular'); // Catch all
  }

}).listen(1337);
