import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover">
      <div className="max-w-md w-full p-6 bg-white rounded shadow">
        <h2 className="text-center text-3xl font-semibold">Login</h2>
        <form onSubmit={submitHandler} className="mt-6">
          <div>
            <label htmlFor="email" className="block text-xl font-medium">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 mt-2 border rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block text-xl font-medium">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-2 mt-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4"
              />
              <span className="ml-2 text-lg">Remember me</span>
            </label>
            <a href="#" className="text-lg text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full mt-6 py-2 text-xl font-medium text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;