import React, { useContext, useState } from "react";
import Header from "../Header";
import { AuthContext } from "../../context/AuthProvider";
import UserList from "../UserList";

const Admin = ({ logOutuser, changeUser }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      title,
      desc,
      assign,
      date,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    let data = [...userData.users];

    data.forEach(function (elem) {
      if (assign === elem.firstname) {
        if (!elem.tasksNumbers) {
          elem.tasksNumbers = { newTask: 0 };
        }
        elem.tasks.push(task);
        elem.tasksNumbers.newTask = (elem.tasksNumbers.newTask || 0) + 1;
      }
    });

    setUserData({ ...userData, users: data });
    console.log(data);

    setAssign("");
    setCategory("");
    setDate("");
    setDesc("");
    setTitle("");
  };
  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto text-black ">
      <Header logOutuser={logOutuser} changeUser={changeUser} />
      {/* Create Task Section */}
      <div className="bg-white shadow-xl rounded-xl  p-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Create New Task</h2>

        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-lg font-medium mb-1"
                >
                  Task Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter task title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-3 outline-none bg-gray-50 rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-lg font-medium mb-1"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-3 outline-none bg-gray-50 rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="assignTo"
                  className="block text-lg font-medium mb-1"
                >
                  Assign To
                </label>
                <input
                  type="text"
                  id="assignTo"
                  name="assignTo"
                  placeholder="Team member name"
                  value={assign}
                  onChange={(e) => setAssign(e.target.value)}
                  className="w-full p-3 outline-none bg-gray-50 rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-lg font-medium mb-1"
                >
                  Category
                </label>
                <input
                  id="category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 outline-none bg-gray-50 rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-500 transition-all"
                ></input>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="h-full">
                <label
                  htmlFor="description"
                  className="block text-lg font-medium mb-1"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe the task in detail..."
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full outline-none h-[calc(100%-2rem)] p-3 bg-gray-50 rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
            >
              <span>Create Task</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>

      <UserList userData={userData} />
    </div>
  );
};

export default Admin;
