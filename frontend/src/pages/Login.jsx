import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Add further logic here
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        className="bg-white rounded-3xl shadow-2xl p-8 w-[340px] sm:w-96"
        onSubmit={onSubmitHandler}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </h2>
        <p className="text-center text-gray-500 mb-6">
          {state === "Sign Up"
            ? "Create an account to start booking appointments"
            : "Log in to book an appointment"}
        </p>
        
        {state === "Sign Up" && (
          <div className="w-full mb-4">
            <label className="block text-gray-600 font-medium mb-2">Full Name</label>
            <input
              className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter your full name"
              required
            />
          </div>
        )}

        <div className="w-full mb-4">
          <label className="block text-gray-600 font-medium mb-2">Email</label>
          <input
            className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="w-full mb-6">
          <label className="block text-gray-600 font-medium mb-2">Password</label>
          <input
            className="border border-gray-300 rounded-lg w-full p-3 focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-500 text-white w-full py-3 rounded-lg hover:bg-indigo-600 transition duration-300 ease-in-out font-semibold shadow-lg"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <p className="text-center mt-6 text-gray-500">
          {state === "Sign Up"
            ? "Already have an account? "
            : "Don't have an account? "}
          <span
            onClick={() =>
              setState(state === "Sign Up" ? "Login" : "Sign Up")
            }
            className="text-indigo-500 font-semibold cursor-pointer hover:underline"
          >
            {state === "Sign Up" ? "Log In" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
