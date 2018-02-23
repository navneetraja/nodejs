const express = require('express');
const bodyParser= require('body-parser')
const app = express();


app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log('Hellooooooooooooooooo!')
    console.log(req.body)
  })

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('link-to-mongodb', (err, database) => {
  // ... start the server
})

app.listen(3000, function() {
    console.log('listening on 3000')
  })


//https://1drv.ms/f/s!AkvqmgtPjCqZg2O9lfRrg9G6W_U0 

//https://1drv.ms/f/s!AkvqmgtPjCqZab2V9GuD0bpb9TQ

