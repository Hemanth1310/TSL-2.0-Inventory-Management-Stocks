const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// create a schema
const itemSchema = new Schema({
  itemname: { type: String, required: true, unique: true },
  quantity: { type: String, required: true },
  
}, { collection : 'items' });
 
const Items = mongoose.model('Items', itemSchema);
 
module.exports = Items;