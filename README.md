### _Introduction to Node.js with TypeScript_

_[Back to `master` branch](https://github.com/DunedinJS/typescript-nodejs-intro)_

# Part 3: HTTP server

Node.js is very often used to build web servers. Its asynchronous, non-blocking
I/O offers an advantages in many applications.


## To run

1. `npm i` -- install project dependencies
1. `npm run build` -- build the application
1. `npm start` -- run the application

The server listens to [http://localhost:8080](http://localhost:8080) by default.

It is also possible to specify the port with an environment variable.
For example `PORT=3000 npm start`.

If you encounter an error when starting the server it is most likely that the
port is already being used.

## `http` module

The [`http` module](https://nodejs.org/dist/latest-v6.x/docs/api/http.html)
provides low-level features for HTTP request and response handling.
It is the building-block which full fledged web-server frameworks are built ontop of.

_See the application source files, `app.ts` and `requestHandler.ts` for basic use._

## TypeScript interfaces

Because of the `@types/node` package we have type information for Node.js built-in
features including the `http` module.

In `requestHandler.ts` you can see that the `IncomingMessage` and `ServerResponse`
interfaces are imported. These are not part of the Node.js `http` module itself
but part of the extra type information provided by `@types/node`.

TypeScript interfaces are 'duck-typed' -- they specify the expected 'shape' of
an object.

The `IncomingMessage` and `ServerResponse` interfaces allow TypeScript to verify
that we don't pass invalid arguments to the function or try to access missing
properties of the arguments within the function.

_See [Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html) in the TypeScript Handbook_
