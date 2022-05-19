const express = require('express');
const moment = require('moment');
const router = express.Router()

const ExpenseDBFile = require("../../expenses")
const Expense = require("../model/Expense")

ExpenseDBFile.forEach(expense => {

    new Expense({
        item: expense.item,
        amount: expense.amount,
        date: expense.date,
        group: expense.group
    }).save()

});

router.get('/expenses', function (request, response) {

    Expense.find({}).sort({ date: -1 }, function (err, expense) {
        console.log(expense)
    })
    response.status(200).send("Get Expenses Sorted From DB: Done ")
})

router.post('/expenses', function (request, response) {
    const expenseData = request.body
    const newExpense = new Expense({
        item: expenseData.item,
        amount: expenseData.amount,
        group: expenseData.group,
        date: expenseData.date ? moment(expenseData.date).format("LLLL") :
            moment.format("LLLL")
    }
    )
    newExpense.save().then((expense) => { console.log(expense.amount) })
    response.status(201).send("New Expense Created : Done")
})

router.put('/update/:group1&:group2', function (request, response) {

    let group1 = request.params.group1
    let group2 = request.params.group2

    Expense.findOneAndUpdate({ group: group1 }, { group: group2 }, { new: true }, function (err, expense) {

        console.log(expense)
        expense.save()
        response.status(201).send(` ${expense.item} Updated Succsufly : Done \n And
                                The new group is ${expense.group}`)
    })
    response.end()

})

router.get('/expenses/:group', function (request, response) {
    let expenseGroup = request.params.group
    let total = request.query.total

    if(total)
    {
        Expense.aggregate([{$match:{group:expenseGroup}},{$group:{_id:null , amount:{$sum: "$amount"}}}],
        function(err,expenses){
            response.status(200).send(expenses)
        })

    }else {
        Expense.find({ group: expenseGroup }, function (err, expenses) {

            response.status(200).send(expenses)
        })
    }
  

})
module.exports = router