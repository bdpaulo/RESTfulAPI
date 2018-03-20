var mongoose = require('mongoose'); //instancia objeto mongoose
var Schema = mongoose.Schema; 
//define schema da collection hero
var heroSchema = new Schema({ 
    name: String,
    id: String
})

module.exports = mongoose.model('Heroes', heroSchema);
