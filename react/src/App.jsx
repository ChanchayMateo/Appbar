import Login from './Views/Login'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './Views/Profile'
import ResponsiveAppBar from './Componentes/AppBar'
import { useLocation } from 'react-router-dom'
import Hola from './Views/Hola'
import { useState } from 'react'

const API_URL = "http://localhost:8000"
function AppContent() {

  const location = useLocation()
  const mostrarbarra = location.pathname !== '/' /*aqui solo elimino la barra de login*/
  return (
    <>
   
     {mostrarbarra && <ResponsiveAppBar />}
    <Routes>
      <Route path='/' element={<Login login = {login}/>} />
      <Route path='/Profile' element={<Profile user={user} />} />
      <Route path='/Hola' element={<Hola/>} />


    </Routes>
  
  
    </>
  )
}
function App() { /* Esto nos ayudara a navegar por toda la app con usenavigate y location*/
  const {IsLogin, setIsLogin} = useState(false)
  const {user, setUser} = useState({})
  const login = async (user)=>{
    const res = await fetch(API_URL+"/login/",{method:"post", headers:{"content-type":"application/json"},
      body: JSON.stringify(user)
    })
    const data = await res.json()
    setIsLogin(data.IsLogin)
    setUser(data.user)
  }
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
export default App