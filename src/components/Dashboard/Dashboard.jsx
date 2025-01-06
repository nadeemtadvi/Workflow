import React, { useState } from "react";
import CompleteTask from "../TaskList/CompleteTask";
import AcceptTask from "../TaskList/AcceptTask";
import FailedTask from "../TaskList/FailedTask";
import NewTask from "../TaskList/NewTask";

const Dashboard = ({ data }) => {
  const [username, setUsername] = useState("");
  if (!data) {
    setUsername("admin");
  } else {
    setUsername(data.firstname);
  }
  return (
    <div className="min-h-screen bg-[#f7f7f7] font-sans ">
      <div className="p-4 flex bg-white shadow-sm justify-between items-center">
        <h1 className="text-2xl font-bold">{username} 👋</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Log Out
        </button>
      </div>

      <div className="p-4 ">
        {/* Task Overview Cards */}
        <div
          id="task-container"
          className="grid grid-cols-2 md:grid-cols-4 gap-6  text-white"
        >
          <div className="bg-blue-500  text-center p-4 rounded-lg shadow-lg">
            <p className="text-3xl font-bold">{data.taskNumbers.newTask}</p>
            <p className="text-xl">New Task</p>
          </div>
          <div className="bg-green-500 text-center p-4 rounded-lg shadow-lg">
            <p className="text-3xl font-bold">{data.taskNumbers.completed}</p>
            <p className="text-xl">Completed</p>
          </div>
          <div className="bg-yellow-500 text-center p-4 rounded-lg shadow-lg">
            <p className="text-3xl font-bold">{data.taskNumbers.active}</p>
            <p className="text-xl">Accepted</p>
          </div>
          <div className="bg-red-500 text-center p-4 rounded-lg shadow-lg">
            <p className="text-3xl font-bold">{data.taskNumbers.failed}</p>
            <p className="text-xl">Failed</p>
          </div>
        </div>
        <div className="mt-10">
          <div
            id="task-container"
            className=" flex gap-6 items-center flex-nowrap overflow-x-auto pb-8"
          >
            {data.tasks.map((elem, idx) => {
              if (elem.active) {
                return <AcceptTask key={idx} />;
              }
              if (elem.completed) {
                return <CompleteTask key={idx} />;
              }
              if (elem.failed) {
                return <FailedTask key={idx} />;
              }
              if (elem.newTask) {
                return <NewTask key={idx} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
