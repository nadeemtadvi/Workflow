import React, { useState } from "react";

const Admin = () => {
  const [form, setForm] = useState({
    title: "",
    description: "", 
    date: "",
    assignTo: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task Created:", form);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto text-white">
      {/* Create Task Section */}
      <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-8 text-center">Create New Task</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-1">
                  Task Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter task title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-1">
                  Due Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="assignTo" className="block text-sm font-medium mb-1">
                  Assign To
                </label>
                <input
                  type="text"
                  id="assignTo"
                  name="assignTo"
                  placeholder="Team member name"
                  value={form.assignTo}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium mb-1">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option value="">Select category</option>
                  <option value="design">Design</option>
                  <option value="development">Development</option>
                  <option value="marketing">Marketing</option>
                  <option value="research">Research</option>
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="h-full">
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe the task in detail..."
                  value={form.description}
                  onChange={handleChange}
                  className="w-full h-[calc(100%-2rem)] p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
            >
              <span>Create Task</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* Task List Section */}
      <div className="mt-8 bg-gray-900/50 backdrop-blur-lg rounded-xl shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-6">Task List</h2>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Task Card */}
          <div className="bg-gray-800/50 rounded-xl p-4 hover:shadow-lg transition-all duration-200">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold">Task Title</h3>
              <span className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full">
                Design
              </span>
            </div>
            
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              Task description goes here. This is a brief overview of what needs to be done.
            </p>
            
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
              <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                <span className="px-2 py-1 bg-gray-700/50 rounded-full">Due: 24 Dec</span>
                <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full">High Priority</span>
              </div>
              
              <div className="flex gap-2">
                <button className="p-2 text-sm text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors">
                  Edit
                </button>
                <button className="p-2 text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
