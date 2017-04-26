### _Introduction to Node.js with TypeScript_

_[Back to `master` branch](https://github.com/DunedinJS/typescript-nodejs-intro)_

# Part 2: Node.js basics

Because Node.js runs on the server-side rather than in a web browser it provides
a different set of features.
For example, a web browser has features for DOM manipulation whereas Node.js has
features for accessing the file system.

Some Node.js features are global objects but most are built in packages/modules
which must be imported/required to be used.

At this stage we take a brief look at some basic features.

_See the [Node.js API documentation](https://nodejs.org/dist/latest-v6.x/docs/api/) for more details._

## To run

1. `npm i` -- install project dependencies
1. `npm run build` -- build the application
1. `npm start` -- run the application

## Type definitions

The `@types/node` package is included to inform the TypeScipt compiler of how
the built in Node.js features are typed.

The `@types` package namespace is used to publish types for JavaScript packages.

_Type definitions also allow smarter code suggestions in editors with full
TypeScript support such as [VSCode](https://code.visualstudio.com/)._

#### Viewing definitions


![VSCode peek definition](./readme-assets/vscode-peek-definition.gif)

## Environment variables

The `process` global object provides information about the current Node.js process.

Environment variables are found in the `process.env` object.
To get the `NAME` variable for example we lookup `process.env.NAME`.

_See `source/app.ts` for an example and try running `NAME=Matt npm start`._

## Operating system

The `os` module provides information about the operating system which the Node.js process is running on.

_See `source/app.ts` for an example of finding the OS type and version.`_

## File system

The `fs` module provides access to the file system.

_See `source/app.ts` for an example of listing the contents of the project directory.`_

