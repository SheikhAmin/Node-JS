const fs = require('fs');

fs.writeFile('demo1.txt', "This is a sample text", (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Successful");
    }
})

fs.appendFile('demo1.txt', " my name is sheikh amin", (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Successful");
    }
})

fs.readFile('demo1.txt', 'utf-8', (data, error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
})

fs.rename('demo1.txt', "demo2.txt", (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Successful");
    }
})

fs.writeFile('demo6.txt', "This is a sample text", (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Successful");
    }
})

fs.unlink('demo6.txt', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Successful");
    }
})

fs.exists('demo6.txt', (result) => {
    if (result) {
        console.log("found");
    } else {
        console.log("not found");
    }
})