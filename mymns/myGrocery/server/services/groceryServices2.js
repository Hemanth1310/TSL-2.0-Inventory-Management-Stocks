const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/groceryDb';
const Items = require('../model/items')
class GroceryService2{
    
    constructor(req, res){
        this.req = req
        this.res = res
    }

    insert(groceryItem, db, callback){
        db.collection('itemlist').insertOne({
                "item" : groceryItem
        }, function(){
            callback()      
        })
    }

    addGrocery(){
        let self = this;
        let groceryItem = this.req.body.itemname;
        try{
            MongoClient.connect(url, function(err, db) {
                assert.equal(null, err);
                Items.insert(groceryItem, db, function(){
                    db.close()
                    return self.res.status(200).json({
                        status: 'success'
                    })
                })
            });
        }
        catch(error){
            return self.res.status(500).json({
                status: 'error',
                error: error
            })
        }
    }
}
module.exports = GroceryService2