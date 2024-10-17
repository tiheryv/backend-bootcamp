// Introduction to Node.js

// Reading and writing files
const fs = require('fs');

const textInp = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textInp)

const textOut = `This is what we know about the avocado: ${textInp}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log("File written!")
