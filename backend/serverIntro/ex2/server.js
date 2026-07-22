const http = require('http')

let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" }
];
                        
                    
const server = http.createServer(async (req, res) =>{
    console.log("server called")
    if(req.method === "GET"){
        console.log("valid get method")
        if(req.url == "/api/users"){
            res.writeHead(200, { "Content-Type": "application/json" });
            if(users){
                return res.end(JSON.stringify(users));
            }else{
                res.writeHead(404, { "Content-Type": "text/plain" });
                return res.end("No users found");
            }
            
        }
        else
        if(req.url===("/api/users/1")){
            const parts = req.url.split('/');
            const lastPart = parts[parts.length - 1]; 
            const userId = parseInt(lastPart);
            console.log("Extracted ID:", userId);
            const user = users.find(u => u.id === userId);
            if (user) {
                return res.end(JSON.stringify(user));
                res.writeHead(200, { "Content-Type": "text/plain" });
            }else {
                res.writeHead(404, { "Content-Type": "text/plain" });
                console.log("User not found");
                console.log(userId);
                console.log(users);
                console.log(user);
                return res.end("User not found");
            }
        }
    }
    if(req.method == "POST"){
        if(req.url == "/api/users"){
            const newUser = await readBody(req);
            if(newUser && newUser.name && newUser.email){
                newUser.id = users[users.length-1].id + 1;
                users.push(newUser)
                res.statusCode(201)
                res.write(JSON.stringify(newUser))
            }else {
                res.statusCode = 400;
                res.write(JSON.stringify({ errorCode: 392, message: "body must include content prop" }))
            }
        }
    }else{
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
})

const port = 3000
server.listen(port, function () {
    console.log(`Node server created at port ${port}`)
})
function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = [];
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        resolve(JSON.parse(body));
      });
  });
}