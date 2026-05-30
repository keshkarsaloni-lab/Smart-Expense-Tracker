import React from "react";

function Home() {

  return (

    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-100
    "
    >

      <div
        className="
        bg-white
        p-10
        rounded-xl
        shadow-lg
        w-[500px]
        text-center
      "
      >

        <h1
          className="
          text-4xl
          font-bold
          mb-6
          text-blue-600
        "
        >
          Smart Expense Tracker
        </h1>

        <p
          className="
          text-gray-600
          text-lg
          leading-8
          mb-8
        "
        >
          Track your income, expenses,
          analytics and monthly budget
          easily with a professional
          expense management system.
        </p>

        <div
          className="
          flex
          justify-center
          gap-4
        "
        >

          <a href="/login">

            <button
              className="
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-blue-700
            "
            >
              Login
            </button>

          </a>

          <a href="/register">

            <button
              className="
              bg-green-600
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-green-700
            "
            >
              Register
            </button>

          </a>

        </div>

      </div>

    </div>
  );
}

export default Home;