const express = require('express');
const router = express.Router();


const Transaction = require('../model/transaction');



router.get('/transactions',async function (request, response) {
    const transaction = Transaction.find({});
    response.status(200).send(transaction);
})

router.post('/transaction',async function (request, response){
    const newTransaction = new Transaction(request.body);
    await newTransaction.save();
    response.status(201).send("New Transaction saved successfuly");

})


router.delete('/transaction',async function(request,response){
    await Transaction.findByIdAndRemove(req.params.id)
    res.status(200).send("Deleted successfuly")
})



module.exports = router

