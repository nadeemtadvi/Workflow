import React from 'react'

const Header = ({logOutuser}) => {
  return (
    <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">username👋</h1>
        <button  onClick={() => logOutuser()} className="bg-red-500 text-white px-4 py-2 rounded">
          Log Out
        </button>
      </div>
  )
}

export default Header