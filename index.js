let express = require('express')
let myexpress = express()
const port = process.env.port || 8080;

myexpress.get('/', function(req, res){
    res.send('home page!')
})

myexpress.get('/about', function(req, res){
   res.send('about page!')
})

myexpress.get('/products', function(req, res){
    res.send('products page!')
})

myexpress.listen(port)

