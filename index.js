const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((request, response) =>{
    if (request.url === "/favicon.ico") return response.end();
    const log = `${Date.now()}: ${request.url} New request received\n`;
    const myUrl = url.parse(request.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname){
            case "/":
                response.end("Homepage");
                break;
            case "/about":
                const username = myUrl.query.myname;
                response.end(`Hello, ${username}`);
                break;
            case "/search":
                const search = myUrl.query.search_query;
                response.end("Here are your search results for "+search);
            default:
                response.end("404 not found");
        }
    });
});

server.listen(8000, () => console.log("Server started!"));