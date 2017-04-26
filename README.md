### _Introduction to Node.js with TypeScript_

_[Back to `master` branch](https://github.com/DunedinJS/typescript-nodejs-intro)_

# Part 4: Debugging

Visual Studio Code includes an excellent debugger with built-in support for Node.js
applications. Extensions are also available to support other languages and runtimes.

This stage adds the `.vscode/launch.json` file which defines how the application
is launched and connected to the debugger.

## To run the application in the debugger

1. `npm i` -- install project dependencies
1. `npm run build` -- build the application
1. Switch to the Debug tab in Visual Studio Code and click the green button beside 'Launch'

The server listens to [http://localhost:8080](http://localhost:8080) by default.

The application output is visible in the Debug Console tab of the bottom panel
and a set of debugging controls appear in an overlay.

To stop the debugger click the square, red stop button in the debugging controls.

## Breakpoints

Breakpoints can be set by clicking in the left gutter of lines in source files.

Execution is paused when the application encouters a breakpoint.
While paused you are able to inspect values and the call stack.

<iframe width="560" height="315" src="https://www.youtube.com/embed/9wP4SDSr-ko" frameborder="0" allowfullscreen></iframe>

By right clicking in the left gutter and selecting 'Add Conditional Breakpoint...'
you are also able to create breakpoints which only apply if a given condition is met.

_Try setting your own breakpoints and inspecting values.
Remember that to hit the breakpints you will likely need to make requests to the server._
