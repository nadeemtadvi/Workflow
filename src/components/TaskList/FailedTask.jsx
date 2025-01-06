import React from "react";

const FailedTask = () => {
  return (
    <div className="flex-shrink-0 w-[300px] h-[240px] bg-red-100 p-4 rounded-lg shadow-md  border-red-400">
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-between items-center">
            <span className="bg-white text-red-400 text-xs px-2 py-1 rounded">
              failed
            </span>
            <span className="text-lg text-gray-500">12/12/2025</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mt-2">
            Ek aur task
          </h2>
          <p className="text-gray-500 text-lg mt-1">
            Example Aisa kahi nahi dekha hoga jaisa
          </p>
        </div>
        <div className="mt-4 flex justify-end ">
          
          <button className="bg-red-500 text-white text-sm font-medium px-1.5 py-2 rounded shadow-md hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-400">
          Failed
          </button>
        </div>
      </div>
    </div>
  );
};

export default FailedTask;
