const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;

    switch(url) {
        case "/":
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<h2>Welcome to Homepage!</h2>");
            break;
        case "/about":
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<h2>Welcome to About Page!</h2>");
            break;
        case "/contact":
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<h2>Welcome to Contact Page!</h2>");
            break;
        default: 
            res.writeHead(404, {"Content-Type": "text/html"});
            res.write("<h2>404 Not Found</h2>")
    }

    res.end();
});

const port = 5000;

server.listen(port, () => {
    console.log(`The server is running on Port ${port}`);
});