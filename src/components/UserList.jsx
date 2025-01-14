import React from 'react'

const UserList = ({userData}) => {
  return (
    <div className="mt-8 bg-white rounded-xl shadow-xl p-6">
    <h2 className="text-3xl font-bold mb-6">User List</h2>
    <div className="grid grid-cols-5 text-white text-center  pb-2">
      <h4 className="text-2xl py-1.5 text-start bg-black pl-2">Name</h4>
      <h4 className="text-2xl py-1.5 bg-orange-500">Active</h4>
      <h4 className="text-2xl py-1.5 bg-blue-500">New Task</h4>
      <h4 className="text-2xl py-1.5 bg-green-500">Completed</h4>
      <h4 className="text-2xl py-1.5 bg-red-500 ">Failed</h4>
    </div>
    {userData.users.map((elem, idx) => (
      <div key={idx} className="grid grid-cols-5 text-center pt-2 ">
        <h4 className="text-xl py-1.5  text-start pl-2">
          {elem.firstname} <span className='text-sm text-gray-600 italic'>{elem.email}</span> 
        </h4>
        <h4 className="text-xl py-1.5  text-gray-500">
          {elem.taskNumbers.active}
        </h4>
        <h4 className="text-xl py-1.5 text-gray-500">
          {elem.taskNumbers.newTask}
        </h4>
        <h4 className="text-xl py-1.5 text-gray-500">
          {elem.taskNumbers.completed}
        </h4>
        <h4 className="text-xl py-1.5 text-gray-500">
          {elem.taskNumbers.failed}
        </h4>
      </div>
    ))}
  </div>
  )
}

export default UserList