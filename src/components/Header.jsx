import React from 'react'

const Header = ({logOutuser, changeUser}) => {
  console.log('header changeUser',changeUser);
  
  return (
    <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{changeUser}</h1>
        <button  onClick={() => logOutuser()} className="bg-red-500 text-white px-4 py-2 rounded">
          Log Out
        </button>
      </div>
  )
}

export default Header