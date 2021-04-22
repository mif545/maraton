const express=require('express');
const app=express();
const jwt=require('jsonwebtoken')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var cors = require("cors");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(9000,function(){
    console.log("listen to port 9000");
})

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
})


app.get('/',function(req,res){
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send("succsed");
        }
    
})
app.post('/addUser',function(req,res){
    console.log("ad user start");
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("dbmaraton");
        dbo.collection("marathon_runners").insertOne(req.body, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
})

app.get('/',function(req,res){
    res.send("welcome to the system");
  })

