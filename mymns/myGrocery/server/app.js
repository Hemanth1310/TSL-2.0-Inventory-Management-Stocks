const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const assert = require('assert');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/mydb';
const User = require('./model/user');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))
const groceryService  = require('./services/groceryServices')


app.post('/api/user/login', (req, res) => {
    mongoose.connect(url,{ useMongoClient: true }, function(err,db){
        if(err) throw err;
        User.find({
            username : req.body.username, password : req.body.password
        }, function(err, user){
            if(err) throw err;
            if(user.length === 1){  
                return res.status(200).json({
                    status: 'success',
                    data: user
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Login Failed'
                })
            }
             
        })
    });
})


app.post('/api/getGrocery', function (req, res) {
    let groceryServiceObj = new groceryService(req, res)
    groceryServiceObj.getGrocery()
  })
  app.post('/api/updateGrocery', function (req, res) {
    mongoose.connect(url,{ useMongoClient: true }, function(err,db){
        if(err) throw err;
        
        var myquery = { itemname: req.body.itemname  };
        var newvalues = { itemname: req.body.itemname, quantity:req.body.quantity };
        db.collection('itemsdb').update(myquery,newvalues, function(err, user){
            if(err) throw err;
           
                return res.status(200).json({
                    status: 'success',
                    data: user
                })
             
        })
    });

        
    })
    app.post('/api/register', function (req, res) {
        mongoose.connect(url,{ useMongoClient: true }, function(err,db){
            if(err) throw err;
            
           
            var newvalues = {name:req.body.name, username: req.body.username, password:req.body.password };
            db.collection('user').insertOne(newvalues, function(err, user){
                if(err) throw err;
               
                    return res.status(200).json({
                        status: 'success',
                        
                    })
                 
            })
        });
    
            
        })
app.listen(3000, () => console.log('blog server running on port 3000!'))
