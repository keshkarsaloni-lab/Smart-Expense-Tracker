import { useState }
from "react";

import API
from "../services/api";

function TransactionForm() {

  const [type, setType] =
    useState("");

  const [category,
    setCategory] =
    useState("");

  const [amount,
    setAmount] =
    useState("");

  const [description,
    setDescription] =
    useState("");








  const handleSubmit =
    async (e) => {

    e.preventDefault();








    const savedBudget =

      Number(

        localStorage.getItem(
          "budget"
        )

      );








    if (

      type === "expense"

      &&

      Number(amount)
      >
      savedBudget

    ) {

      alert(
        "⚠ Budget Limit Exceeded!"
      );

      return;
    }








    try {

      await API.post(

        "/transactions",

        {
          type,
          category,
          amount:
            Number(amount),
          description,
        }

      );








      alert(
        "Transaction Added"
      );








      window.location.reload();








    } catch (error) {

      console.log(error);

      alert(
        "Transaction Failed"
      );
    }
  };









  return (

    <div
      className="
      bg-white
      rounded-xl
      shadow-lg
      p-6
      mt-10
    "
    >

      <h2
        className="
        text-2xl
        font-bold
        mb-6
      "
      >
        Add Transaction
      </h2>








      <form
        onSubmit={handleSubmit}
      >

        <select

          value={type}

          onChange={(e) =>
            setType(
              e.target.value
            )
          }

          className="
          w-full
          border
          p-3
          mb-4
          rounded-lg
        "
        >

          <option value="">
            Select Type
          </option>

          <option value="income">
            Income
          </option>

          <option value="expense">
            Expense
          </option>

        </select>








        <input
          type="text"

          placeholder="Category"

          value={category}

          onChange={(e) =>
            setCategory(
              e.target.value
            )
          }

          className="
          w-full
          border
          p-3
          mb-4
          rounded-lg
        "
        />








        <input
          type="number"

          placeholder="Amount"

          value={amount}

          onChange={(e) =>
            setAmount(
              e.target.value
            )
          }

          className="
          w-full
          border
          p-3
          mb-4
          rounded-lg
        "
        />








        <input
          type="text"

          placeholder="Description"

          value={description}

          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }

          className="
          w-full
          border
          p-3
          mb-4
          rounded-lg
        "
        />








        <button
          type="submit"

          className="
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-lg
        "
        >
          Add Transaction
        </button>

      </form>

    </div>
  );
}

export default
TransactionForm;