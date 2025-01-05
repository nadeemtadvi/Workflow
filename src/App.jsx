import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import Dashboard from './components/Dashboard/Dashboard'
import Admin from './components/Dashboard/Admin'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'


const App = () => {

  const [users, setUsers] = useState(null);
const handleLogin = () => {
  setUsers(true);
}


  return (
    <>
    {!users ? <Login/> : ''}
    {/* <Dashboard/> */}
    {/* <Admin/> */}
    </>
  )
}

export default App