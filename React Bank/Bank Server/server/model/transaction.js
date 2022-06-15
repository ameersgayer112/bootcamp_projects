const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    amount:Number,
    category:String,
    vendor:String

})


let transaction = mongoose.model("transactionModel",transactionSchema)

module.exports=transaction