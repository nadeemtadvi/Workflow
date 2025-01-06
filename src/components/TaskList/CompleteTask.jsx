import React from "react";

const CompleteTask = ({data}) => {
  return (
    <div className="flex-shrink-0 w-[300px] h-[240px] bg-green-100 p-4 rounded-lg shadow-md  border-green-400">
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-between items-center">
            <span className="text-green-500 bg-white text-xs px-2 py-1 rounded">
            {data.category}
            </span>
            <span className="text-lg text-gray-500">{data.date}</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mt-2">
          {data.title}
          </h2>
          <p className="text-gray-500 text-lg mt-1">
          {data.description}
          </p>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="text-white bg-green-500 text-sm font-medium px-1.5 py-2 rounded shadow-md hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-400">
         complete
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;
