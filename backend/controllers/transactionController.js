const Transaction = require("../models/Transaction");



// ADD TRANSACTION

exports.addTransaction = async (req, res) => {
  try {

    const {
      type,
      category,
      amount,
      description,
    } = req.body;

    const transaction = await Transaction.create({
      user: req.user.id,
      type,
      category,
      amount,
      description,
    });

    res.status(201).json({
      message: "Transaction Added",
      transaction,
    });

  } catch (error) {

    res.status(500).json({
      message: "Add Transaction Failed",
    });

  }
};



// GET TRANSACTIONS

exports.getTransactions = async (req, res) => {
  try {

    const transactions =
      await Transaction.find({
        user: req.user.id,
      });

    res.status(200).json(transactions);

  } catch (error) {

    res.status(500).json({
      message: "Get Transactions Failed",
    });

  }
};



// UPDATE TRANSACTION

exports.updateTransaction = async (req, res) => {
  try {

    const updatedTransaction =
      await Transaction.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.status(200).json({
      message: "Transaction Updated",
      updatedTransaction,
    });

  } catch (error) {

    res.status(500).json({
      message: "Update Failed",
    });

  }
};



// DELETE TRANSACTION

exports.deleteTransaction = async (req, res) => {
  try {

    await Transaction.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Transaction Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: "Delete Failed",
    });

  }
};