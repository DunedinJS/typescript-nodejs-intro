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


## TypeScript

Take a look at the source files `app.ts` and `greet.ts`.

There are two important things to note about the code:

1. The `greet.ts` module is imported into `app.ts` with `import greet from './greet'` syntax.

    Node.js does not yet support ES module syntax. It only supports CommonJS style which is like `const greet = require('./greet')`.

    TypeScript uses `import` and `export` syntax for modules but the compiler is configured to output the module syntax which Node.js supports.

    _See [Modules](https://www.typescriptlang.org/docs/handbook/modules.html) in the TypeScript Handbook._

2. The `greet` function in `greet.ts` has a type notation which expects argument type to be a string.

    Type notations are a TypeScript feature which are used during compilation but stripped out of the compiled JavaScript output.

    _See [Bacic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html) and [Functions](https://www.typescriptlang.org/docs/handbook/functions.html) in the TypeScript Handbook._
