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
    <div className="relative min-h-screen md:flex items-center justify-center bg-gray-100 bg-cover">
      
      <div className="max-w-md w-full p-6 bg-white rounded shadow m-1">
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
              className="w-full px-4 py-2 mt-2 border bg-gray-50 outline-none focus:ring-1 ring-blue-400 rounded"
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
              className="w-full px-4 py-2 mt-2 border bg-gray-50 outline-none focus:ring-1 ring-blue-400 rounded"
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
        <div className=" mt-4 top-[5%] left-[5%] p-5 bg-white text-gray-600 rounded m-1">
          <h1 className="text-lg mb-2 text-red-600 font-semibold italic">Warning</h1>
        <h2 className="text-lg mb-2 text-gray-800 font-semibold">Login Credential</h2>
        <h2 className="text-sm ">Email : admin@example.com  Pswd : 123</h2>
        <h2 className="text-sm ">Email : a@a.com  Pswd : 123</h2>
      </div>
      </div>
     
    </div>
  );
};

export default Login;