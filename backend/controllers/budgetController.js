const Budget = require("../models/Budget");



// SET BUDGET

exports.setBudget = async (req, res) => {
  try {

    const {
      category,
      limit,
      month,
    } = req.body;

    const budget = await Budget.create({
      user: req.user.id,
      category,
      limit,
      month,
    });

    res.status(201).json({
      message: "Budget Set Successfully",
      budget,
    });

  } catch (error) {

    res.status(500).json({
      message: "Set Budget Failed",
    });

  }
};



// GET BUDGETS

exports.getBudget = async (req, res) => {
  try {

    const budgets = await Budget.find({
      user: req.user.id,
    });

    res.status(200).json(budgets);

  } catch (error) {

    res.status(500).json({
      message: "Get Budget Failed",
    });

  }
};