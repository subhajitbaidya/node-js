const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) =>{
    const log = `${Date.now()}: ${request.url} New request received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch (request.url){
            case "/":
                response.end("Homepage");
                break;
            case "/about":
                response.end("I am Subhajit");
                break;
            default:
                response.end("404 not found");
        }
    });
});

server.listen(8000, () => console.log("Server started!"));