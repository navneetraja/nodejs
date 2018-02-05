var express = require('express');
var bodyParser= require('body-parser')
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://nav11raja:Navn24raja@ds125318.mlab.com:25318/userinfo";
//var url = "mongodb://localhost:27017/mydb";
var port=process.env.PORT||3000;



app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})

app.post('/insert', function(req, res){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        dbo.collection("customers").insertOne(req.body, function(err, res) {
          if (err) throw err;
          db.close();
        });
      }); 

      //console.log(req.body)
    res.send(req.body)
  })

app.listen(port);      