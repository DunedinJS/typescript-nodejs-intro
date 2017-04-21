import { createServer } from 'http';
import requestHandler from './requestHandler';

// create the HTTP server and listen on the port
const server = createServer(requestHandler);

// catch and log server errors
server.on('error', (error: Error) => {
  console.error(error);
});

// get the port from the PORT environment variable or default to 8080
const port = parseInt(process.env.PORT, 10) || 8080;

server.listen(port, () => {
  console.log(`HTTP server is listening on ${port}`)
});
