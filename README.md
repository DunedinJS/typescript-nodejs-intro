### _Introduction to Node.js with TypeScript_

# Part 1: Setup

Node.js lets you execute JavaScript code.

For example you may run `node app.js`.

But for this project we write the source code in TypeScript.
The TypeScript source code must first be compiled into plain JavaScript before it can be executed by Node.js.

## Tasks

* `npm i` -- install project dependencies
* `npm run build` -- build the application
* `npm start` -- run the application

The tasks should be run in the order above.
Dependencies must be installed before the application can be built and the application must be built before it runs.

## Files and directories

#### `source`

Our application source code will reside in the `source` directory.

The main/entry file for the application is `source/app.ts`.

#### `dist`

Compiled files including JavaScript code, sourcemaps, and type definitions will be generated in the `dist` directory.

The `dist` directory is not checked into the repository. It is created when the `npm run build` task runs.

#### `package.json`

The `package.json` file defines information about the 'package'.

You will see that it includes a `devDependencies` section which defines which third-party packages are depended on for development.

There is also a `scripts` section which defines tasks related to the project.

#### `node_modules`

Third-party packages get installed in the `node_modules` directory.

This directory is not checked into the repository. It is created when the `npm i` task runs.

#### `tsconfig.json`

The `tsconfig.json` file indicates that this is a TypeScript project.
The file contains configuration options for the TypeScript compiler.

_See the [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
for more information about this file and other TypeScript compiler options._
