const http = require('http')
const fs = require('fs')
const port = 80


const requestHandler = (request, response) => {
  console.log("Received request: " + request.url);
  if (request.url.endsWith("/health") && fs.existsSync("/fail-health")) {
          console.log("failing health check...");
          response.statusCode = 500;
          response.end("Not Healthy");
          return;
  }
  response.end("<p>Hello Node.js Server!</p>")
}

const server = http.createServer(requestHandler)

exitOnSignal('SIGINT');
exitOnSignal('SIGTERM');
process.stdin.resume();

function exitOnSignal(signal) {
  process.on(signal, function() {
    console.log('\ncaught ' + signal + ', exiting');
    process.exit(1);
  });
}


server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})