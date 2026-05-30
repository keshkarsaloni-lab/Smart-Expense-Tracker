const Transaction =
  require("../models/Transaction");

const getDashboardSummary =
  async (req, res) => {

  try {

    const transactions =
      await Transaction.find();








    let totalIncome = 0;

    let totalExpense = 0;








    transactions.forEach(
      (item) => {

      if (
        item.type === "income"
      ) {

        totalIncome +=
          Number(item.amount);

      }

      if (
        item.type === "expense"
      ) {

        totalExpense +=
          Number(item.amount);

      }

    });








    const balance =

      totalIncome -
      totalExpense;








    res.json({

      totalIncome,

      totalExpense,

      balance,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "Server Error",
    });
  }
};

module.exports = {
  getDashboardSummary,
};