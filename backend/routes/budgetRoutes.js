const express =
  require("express");

const router =
  express.Router();

const Budget =
  require("../models/Budget");



// SAVE BUDGET
router.post(
  "/",
  async (req, res) => {

    try {

      const { budget } =
        req.body;

      const newBudget =
        new Budget({
          budget,
        });

      await newBudget.save();

      res.status(201).json({
        message:
          "Budget Saved",
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Budget Save Failed",
      });
    }
  }
);



// GET BUDGET
router.get(
  "/",
  async (req, res) => {

    try {

      const budgets =
        await Budget.find();

      res.json(budgets);

    } catch (error) {

      res.status(500).json({
        message:
          "Error Fetching Budget",
      });
    }
  }
);

module.exports = router;