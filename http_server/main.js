const http = require("http")

const port = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Tye": "text/html"
    })

    const responseMessage = "<h1>Hello World</h1>";
    res.end(responseMessage);
    console.log(`Sent a response : ${responseMessage}`)
})

server.listen(port);
console.log(`The server has started and is listening on port number: ${port}`)