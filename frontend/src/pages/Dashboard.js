import { useEffect, useState }
from "react";

import API
from "../services/api";

import ExpenseChart
from "../components/ExpenseChart";

import MonthlyTrendChart
from "../components/MonthlyTrendChart";

import TransactionForm
from "../components/TransactionForm";

import BudgetForm
from "../components/BudgetForm";

import TransactionList
from "../components/TransactionList";

function Dashboard() {

  const [summary,
    setSummary] =
    useState({
      totalIncome: 0,
      totalExpense: 0,
      balance: 0,
    });









  useEffect(() => {

    fetchDashboard();

  }, []);








  const fetchDashboard =
    async () => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );








      const response =
        await API.get(
          "/dashboard",
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );








      setSummary(
        response.data
      );










    } catch (error) {

      console.log(error);

    }
  };












  return (

    <div
      className="
      min-h-screen
      bg-purple-50
      p-6
    "
    >

      <h1
        className="
        text-4xl
        font-bold
        text-center
        mb-10
      "
      >
        Smart Expense Tracker
      </h1>









      {/* SUMMARY CARDS */}

      <div
        className="
        grid
        md:grid-cols-3
        gap-6
        mb-10
      "
      >

        <div
          className="
          bg-white
          p-6
          rounded-xl
          shadow-lg
        "
        >

          <h2
            className="
            text-xl
            font-semibold
          "
          >
            Total Balance
          </h2>

          <p
            className="
            text-3xl
            text-green-600
            mt-4
          "
          >
            ₹{summary.balance}
          </p>

        </div>









        <div
          className="
          bg-white
          p-6
          rounded-xl
          shadow-lg
        "
        >

          <h2
            className="
            text-xl
            font-semibold
          "
          >
            Total Income
          </h2>

          <p
            className="
            text-3xl
            text-blue-600
            mt-4
          "
          >
            ₹{summary.totalIncome}
          </p>

        </div>









        <div
          className="
          bg-white
          p-6
          rounded-xl
          shadow-lg
        "
        >

          <h2
            className="
            text-xl
            font-semibold
          "
          >
            Total Expense
          </h2>

          <p
            className="
            text-3xl
            text-red-600
            mt-4
          "
          >
            ₹{summary.totalExpense}
          </p>

        </div>

      </div>









      {/* EXPENSE ANALYTICS */}

      <div
        className="
        bg-white
        p-6
        rounded-xl
        shadow-lg
        mb-10
      "
      >

        <h2
          className="
          text-2xl
          font-bold
          text-center
          mb-6
        "
        >
          Expense Analytics
        </h2>

        <ExpenseChart />

      </div>









      {/* MONTHLY TREND */}

      <MonthlyTrendChart />









      {/* FORMS */}

      <TransactionForm />

      <BudgetForm />









      {/* TRANSACTION LIST */}

      <TransactionList />

    </div>
  );
}

export default Dashboard;