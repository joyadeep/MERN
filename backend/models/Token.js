const mongoose=require('mongoose');

const tokenSchema=mongoose.Schema({
    token:String
})

const Token=mongoose.model('Token',tokenSchema);

module.exports=Token;