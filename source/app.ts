// This is the entry file for the application

import * as os from 'os';
import * as fs from 'fs';
import greet from './greet';

// let's get the name from an environment variable or use 'TypeScript' by default
const name = process.env.NAME || 'TypeScript';

console.log(greet(name));

// let's find out which operating system is running
const osName = os.type();
const osVersion = os.release();

console.log(`${osName} ${osVersion}`);

// let's list the contents of the current directory
fs.readdir('.', (error: NodeJS.ErrnoException, files: string[]) => {
  // Node.js has asynchronous I/O so we get the result in a callback

  if (error) {
    console.error(error);
    return;
  }

  // the type annotation for the files argument enforces that the value is an
  // array of strings so it's safe to call the files.join method
  console.log(files.join(', '));
});
