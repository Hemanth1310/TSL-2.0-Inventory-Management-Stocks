const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/mydb';

class GroceryService{
    
    constructor(req, res){
        this.req = req
        this.res = res
    }

    getGrocery(){
        let self = this;
        try{
            MongoClient.connect(url, function(err, db) {
                assert.equal(null, err);
                let groceryList = []
                let collect = db.db('mydb');
                var cursor = collect.collection('itemsdb').find()
    
                cursor.each(function(err, doc) {
                  assert.equal(err, null);
                  if (doc != null) {
                    groceryList.push(doc)
                  } else {
                    return self.res.status(200).json({
                        status: 'success',
                        data: groceryList
                    })
                  }
                });
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
    module.exports = GroceryService




