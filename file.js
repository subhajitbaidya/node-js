const fs = require("fs");


// ! synchronous call
fs.writeFileSync("./test.txt", "Test");

//! asynchronous
fs.writeFile("./testasync.txt", "Test2", (err) => {});

// !synchronous call
// const val = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(val);

//! // asynchronous call
fs.readFile("./contacts.txt", "utf8", (err, result) => {
    if(err){
        console.log("Error", err);
    }else{
        console.log(result);
    }
})