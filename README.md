### _Introduction to Node.js with TypeScript_

# Part 3: HTTP server

Node.js is very often used to build web servers. Its asynchronous, non-blocking
I/O offers an advantages in many applications.

To run the server first run `npm i` to install project dependencies,
then `npm run build` to compile the application,
then `npm start`.

The server listens to [http://localhost:8080](http://localhost:8080) by default.

It is also possible to specify the port with an environment variable.
For example `PORT=3000 npm start`.

If you encounter an error when starting the server it is most likely that the
port is already being used.

## `http` module

The [`http` module](https://nodejs.org/dist/latest-v6.x/docs/api/http.html) provides low-level features to for HTTP request and response
handling. It is the building-block which full fledged web-server frameworks are
built ontop of.

_See the application source files, `app.ts` and `requestHandler.ts`._

## TypeScript interfaces

Because of the `@types/node` package we have type information for Node.js built-in
features including the `http` module.

In `requestHandler.ts` you can see that the `IncomingMessage` and `ServerResponse`
interfaces are imported. These are not part of the Node.js `http` module itself
but part of the extra type information provided by `@types/node`.
