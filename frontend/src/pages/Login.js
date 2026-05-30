import { useState } from "react";

import API from "../services/api";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");



  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response =
        await API.post(
          "/auth/login",
          {
            email,
            password,
          }
        );

      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Login Successful");

      window.location.href =
        "/dashboard";

    } catch (error) {

      alert("Login Failed");

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
        onSubmit={handleLogin}
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
          Login
        </h1>

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
          bg-blue-600
          text-white
          p-3
          rounded-lg
        "
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;