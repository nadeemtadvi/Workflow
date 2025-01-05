import React from "react";

const Dashboard = () => {
  const tasks = [
    {
      priority: "High",
      title: "Ek aur task",
      description: "Task jaisa kabhi nahi dekha hoga waisa",
      date: "20 Feb 2024",
    },
    {
      priority: "High",
      title: "Example task",
      description: "Example Aisa kahi nahi dekha hoga jaisa",
      date: "20 Feb 2024",
    },
    {
      priority: "High",
      title: "Example task",
      description: "Example Aisa kahi nahi dekha hoga jaisa",
      date: "20 Feb 2024",
    },
    {
      priority: "High",
      title: "Example task",
      description: "Example Aisa kahi nahi dekha hoga jaisa",
      date: "20 Feb 2024",
    },
    {
      priority: "High",
      title: "Example task",
      description: "Example Aisa kahi nahi dekha hoga jaisa",
      date: "20 Feb 2024",
    },
  ];
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hello, Sarthak 👋</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Log Out
        </button>
      </div>

      <div className="p-4 ">
        {/* Task Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-500 text-center p-4 rounded-lg shadow-lg">
            <p className="text-3xl font-bold">0</p>
            <p className="text-lg">New Task</p>
          </div>
          <div className="bg-green-500 text-center p-4 rounded-lg shadow-lg">
            <p className="text-3xl font-bold">3</p>
            <p className="text-lg">Completed</p>
          </div>
          <div className="bg-yellow-500 text-center p-4 rounded-lg shadow-lg">
            <p className="text-3xl font-bold">0</p>
            <p className="text-lg">Accepted</p>
          </div>
          <div className="bg-red-500 text-center p-4 rounded-lg shadow-lg">
            <p className="text-3xl font-bold">1</p>
            <p className="text-lg">Failed</p>
          </div>
        </div>

        <div className="mt-10">
          <div id="task-container" className=" flex gap-6 items-center flex-nowrap overflow-x-auto">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] h-[200px] bg-gray-800 p-4 rounded-lg shadow-lg border-l-4 border-red-500"
              >
                <div className="flex justify-between items-center">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {task.priority}
                  </span>
                  <span className="text-sm text-gray-400">{task.date}</span>
                </div>
                <h2 className="text-lg font-bold mt-2">{task.title}</h2>
                <p className="text-gray-300 text-sm mt-1">{task.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
