import Login from './Views/Login'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './Views/Profile'
import ResponsiveAppBar from './Componentes/AppBar'
import { useLocation } from 'react-router-dom'
import Hola from './Views/Hola'

function AppContent() {

  const location = useLocation()
  const mostrarbarra = location.pathname !== '/' /*aqui solo elimino la barra de login*/
  return (
    <>
   
     {mostrarbarra && <ResponsiveAppBar />}
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path='/Hola' element={<Hola/>} />


    </Routes>
  
  
    </>
  )
}
function App() { /* Esto nos ayudara a navegar por toda la app con usenavigate y location*/
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
export default App