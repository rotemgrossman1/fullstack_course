const http = require('http')

const contactInfo = {
    "name": "Rotem",
    "phone": "0503047722"
}
                        
                    
const server = http.createServer(async (req, res) =>{
    console.log("server called")
    if(req.method === "GET"){
        console.log("valid get method")
        if(req.url == "/"){
            res.writeHead(200, {"Content-Type": "text/plain"})
            return res.end("welcome to my server");
        }
        else
        if(req.url === "/about"){
            res.writeHead(200, { "Content-Type": "text/plain" });
            return res.end("This is the about page");
        }
        else
        if(req.url === "/contact"){
            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify(contactInfo));
        }
    }
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
})

const port = 3000
server.listen(port, function () {
    console.log(`Node server created at port ${port}`)
})
