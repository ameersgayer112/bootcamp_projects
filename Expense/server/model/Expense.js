const mongoose = require('mongoose')
const Schema = mongoose.Schema


const expenseSchema = new Schema({

    item:String,
    amount:Number,
    date: Date,
    group:String

})

let Expense = mongoose.model("ExpenseModel",expenseSchema)

module.exports=Expense