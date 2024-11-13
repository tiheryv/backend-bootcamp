// Introduction to Node.js

// Reading and writing files
const fs = require('fs');

const textInp = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textInp)

const textOut = `This is what we know about the avocado: ${textInp}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log("File written!")


//Non-blocking Asynchronoues way
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {

            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, (err) => {
                console.log("Your file has been written")
            })
        })
    })
})

console.log("Will read the file")