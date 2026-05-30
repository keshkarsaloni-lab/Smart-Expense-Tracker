import { useState } from "react";

import API from "../services/api";

function Register() {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");



  const handleRegister =
    async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/auth/register",
        {
          name,
          email,
          password,
        }
      );

      alert(
        "Registration Successful"
      );

      window.location.href =
        "/login";

    } catch (error) {

      alert(
        "Registration Failed"
      );

    }
  };



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

      <form
        onSubmit={handleRegister}
        className="
        bg-white
        p-10
        rounded-xl
        shadow-lg
        w-96
      "
      >

        <h1
          className="
          text-3xl
          font-bold
          mb-6
          text-center
        "
        >
          Register
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
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
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
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
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
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
          w-full
          bg-green-600
          text-white
          p-3
          rounded-lg
          hover:bg-green-700
        "
        >
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;