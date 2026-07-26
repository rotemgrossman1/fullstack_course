const express = require('express')
const path = require('path');
const app = express()
const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', function (request, response) {
    response.send("Server is up and running smoothly")
})
app.get('/priceCheck/:name', (req, res) =>{
    const requestedItem = req.params.name.toLowerCase();
    const foundItem = store.find(it => it.name === requestedItem)
    if(!foundItem){
        res.send({"price": null}) 
    }else{
        res.send({"price": foundItem.price}) 
    }
})
app.patch('/buy/:name', (req, res) =>{
    const requestedItem = req.params.name.toLowerCase();
    const foundItem = store.find(it => it.name === requestedItem)
    if(!foundItem){
        //raise an error
        res.status(404).send({"error": "Item not found"})
    }else{
        if(foundItem.inventory <= 0){
            res.status(400).send({"error": "Item out of stock"})
        }else{
            foundItem.inventory -= 1;
            res.send({"message": "Purchase successful", "remainingInventory": foundItem.inventory})
        }
    }
})
const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})