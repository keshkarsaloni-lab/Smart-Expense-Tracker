import { useEffect, useState }
from "react";

import API
from "../services/api";

function TransactionList() {

  const [transactions,
    setTransactions] =
    useState([]);





  const [editingId,
    setEditingId] =
    useState(null);





  const [filterType,
    setFilterType] =
    useState("");





  const [filterCategory,
    setFilterCategory] =
    useState("");





  const [editForm,
    setEditForm] =
    useState({
      type: "",
      category: "",
      amount: "",
      description: "",
    });









  useEffect(() => {

    fetchTransactions();

  }, []);










  const fetchTransactions =
    async () => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const response =
        await API.get(
          "/transactions",
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      setTransactions(
        response.data
      );

    } catch (error) {

      console.log(error);

    }
  };












  const deleteTransaction =
    async (id) => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      await API.delete(
        `/transactions/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      fetchTransactions();

    } catch (error) {

      console.log(error);

    }
  };












  const startEdit =
    (item) => {

    setEditingId(item._id);

    setEditForm({
      type: item.type,
      category: item.category,
      amount: item.amount,
      description:
        item.description,
    });
  };













  const updateTransaction =
    async (id) => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      await API.put(
        `/transactions/${id}`,
        editForm,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      setEditingId(null);

      fetchTransactions();

    } catch (error) {

      console.log(error);

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
        Recent Transactions
      </h2>









      <div
        className="
        flex
        gap-4
        mb-6
        flex-wrap
      "
      >

        <select
          value={filterType}
          onChange={(e) =>
            setFilterType(
              e.target.value
            )
          }
          className="
          border
          p-2
          rounded-lg
        "
        >

          <option value="">
            All Types
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
          placeholder="
          Search Category
          "
          value={filterCategory}
          onChange={(e) =>
            setFilterCategory(
              e.target.value
            )
          }
          className="
          border
          p-2
          rounded-lg
        "
        />

      </div>









      <div
        className="
        overflow-x-auto
      "
      >

        <table
          className="
          w-full
          border-collapse
        "
        >

          <thead>

            <tr
              className="
              bg-gray-200
            "
            >

              <th className="p-3">
                Type
              </th>

              <th className="p-3">
                Category
              </th>

              <th className="p-3">
                Amount
              </th>

              <th className="p-3">
                Description
              </th>

              <th className="p-3">
                Actions
              </th>

            </tr>

          </thead>









          <tbody>

            {
              transactions

              .filter((item) => {

                const matchType =

                  filterType === ""

                  ||

                  item.type ===
                  filterType;






                const matchCategory =

                  item.category

                  .toLowerCase()

                  .includes(

                    filterCategory

                    .toLowerCase()

                  );






                return (

                  matchType

                  &&

                  matchCategory

                );
              })










              .map((item) => (

                <tr
                  key={item._id}
                  className="
                  border-b
                "
                >

                  <td className="p-3">

                    {
                      editingId ===
                      item._id ? (

                      <input
                        value={
                          editForm.type
                        }
                        onChange={(e) =>
                          setEditForm({
                            ...editForm,
                            type:
                              e.target
                                .value,
                          })
                        }
                        className="
                        border
                        p-2
                        rounded
                      "
                      />

                    ) : (
                      item.type
                    )
                    }

                  </td>









                  <td className="p-3">

                    {
                      editingId ===
                      item._id ? (

                      <input
                        value={
                          editForm.category
                        }
                        onChange={(e) =>
                          setEditForm({
                            ...editForm,
                            category:
                              e.target
                                .value,
                          })
                        }
                        className="
                        border
                        p-2
                        rounded
                      "
                      />

                    ) : (
                      item.category
                    )
                    }

                  </td>









                  <td className="p-3">

                    {
                      editingId ===
                      item._id ? (

                      <input
                        value={
                          editForm.amount
                        }
                        onChange={(e) =>
                          setEditForm({
                            ...editForm,
                            amount:
                              e.target
                                .value,
                          })
                        }
                        className="
                        border
                        p-2
                        rounded
                      "
                      />

                    ) : (
                      `₹${item.amount}`
                    )
                    }

                  </td>










                  <td className="p-3">

                    {
                      editingId ===
                      item._id ? (

                      <input
                        value={
                          editForm.description
                        }
                        onChange={(e) =>
                          setEditForm({
                            ...editForm,
                            description:
                              e.target
                                .value,
                          })
                        }
                        className="
                        border
                        p-2
                        rounded
                      "
                      />

                    ) : (
                      item.description
                    )
                    }

                  </td>









                  <td className="p-3 flex gap-2">

                    {
                      editingId ===
                      item._id ? (

                      <button
                        onClick={() =>
                          updateTransaction(
                            item._id
                          )
                        }
                        className="
                        bg-green-500
                        text-white
                        px-3
                        py-1
                        rounded
                      "
                      >
                        Save
                      </button>

                    ) : (

                      <button
                        onClick={() =>
                          startEdit(item)
                        }
                        className="
                        bg-blue-500
                        text-white
                        px-3
                        py-1
                        rounded
                      "
                      >
                        Edit
                      </button>

                    )
                    }










                    <button
                      onClick={() =>
                        deleteTransaction(
                          item._id
                        )
                      }
                      className="
                      bg-red-500
                      text-white
                      px-3
                      py-1
                      rounded
                    "
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default TransactionList;