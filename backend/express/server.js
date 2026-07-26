const express = require('express')
const app = express()
const port = 3000;
const users = {
    tilda: "You've done a wonderful job",
    riva: "You need to improve your form, but good perseverance",
    jeremy: "You're incredible"
}
app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting")
})

app.get('/maps', function (request, response) {
    response.send("Here's some stuff related to maps")
})

app.get('/shoobi', function (request, response) {
    response.send("This here is the shoobi *route*")
})
app.get('/life', function (request, response) {
    response.send("42")
})
app.get('/users/:id', function (request, response) {
    const userText = users[request.params.id];//find the user in the users object
    response.send(userText);
})
app.get('/details', function (request, response) {
    let params = request.query;
    console.log(params.city);
    response.send(params)
})


app.listen(port, () => {
    console.log(`Running server on port ${port}`)
})