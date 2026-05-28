import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Profile from './Views/Profile'
import ResponsiveAppBar from './Componentes/AppBar'
import Hola from './Views/Hola'
import Login from './Views/Login'
import { useEffect, useState } from 'react'
import Details from './Componentes/Deatils'
import useAuth from './hooks/useAuth'
import useAdmin from './hooks/useAdmin'


function AppContent({ login, user, users, delUser, addUser}) {
  const location = useLocation()
  const mostrarbarra = location.pathname !== '/'

  return (
    <>
      {mostrarbarra && <ResponsiveAppBar />}

      <Routes>
        <Route path='/' element={<Login login={login} />} />
        <Route path='/profile' element={<Profile user={user} />} />
        <Route path='/hola' element={<Hola addUser={addUser} users={users} delUser={delUser} />} />
      </Routes>
    </>
  )
}

function App() {
  const { isLogin, token, user, login } = useAuth()
  const { users, getUsers, delUser, addUser } = useAdmin(token)
  
  useEffect(() => {
    if (isLogin) {
      getUsers()
    }
  }, [isLogin])


  return (
    <BrowserRouter>
      <AppContent login={login} user={user} users={users} delUser={delUser} addUser={addUser} />
      <Routes>
        <Route path='/users/:username' element={<Details users={users} />} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App