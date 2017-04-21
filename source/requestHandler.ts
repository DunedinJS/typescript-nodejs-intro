// we only import the necessary interfaces from the http module
import { IncomingMessage, ServerResponse } from 'http';

export default function requestHandler(request: IncomingMessage, response: ServerResponse) {
  // log the requested URL
  console.log(`Requested: ${request.url}`);

  // respond with some text
  response.end('Wow! A Node.js HTTP Server!');
}
