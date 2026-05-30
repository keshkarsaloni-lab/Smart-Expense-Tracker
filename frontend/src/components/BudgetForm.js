import { useState }
from "react";

import API
from "../services/api";

function BudgetForm() {

  const [budget,
    setBudget] =
    useState("");



  const handleSubmit =
    async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/budget",
        {
          budget:
            Number(budget),
        }
      );



      localStorage.setItem(
        "budget",
        budget
      );



      alert(
        "Budget Saved"
      );



      window.location.reload();

    } catch (error) {

      console.log(error);

      alert(
        "Budget Save Failed"
      );
    }
  };









  return (

    <div
      className="
      bg-white
      p-6
      rounded-xl
      shadow-lg
      mt-10
    "
    >

      <h2
        className="
        text-2xl
        font-bold
        mb-4
      "
      >
        Monthly Budget
      </h2>








      <form
        onSubmit={handleSubmit}
      >

        <input
          type="number"

          placeholder="Enter Budget"

          value={budget}

          onChange={(e) =>
            setBudget(
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
          bg-green-500
          text-white
          px-6
          py-3
          rounded-lg
        "
        >
          Save Budget
        </button>

      </form>








      <p
        className="
        mt-4
        text-lg
        font-semibold
      "
      >

        Current Budget:
        ₹{
          localStorage.getItem(
            "budget"
          )
        }

      </p>

    </div>
  );
}

export default
BudgetForm;