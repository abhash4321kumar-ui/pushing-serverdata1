let express = require('express')
let myexpress = express()

myexpress.get('/', function(req, res){
    res.send('home page!')
})

myexpress.get('/about', function(res, res){
   res.send('about page!')
})

myexpress.get('/products', function(req, res){
    res.send('products page!')
})

myexpress.listen(8080)

