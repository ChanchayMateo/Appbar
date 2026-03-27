import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const [usuario, setusuario] = useState('')
  const [contrasena, setcontrasena] = useState('')

  const handleLogin = () => {
    if (usuario && contrasena){
      navigate('/Profile')
    } else {
      alert('Ingresar los campos')
    }
  }
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setusuario(e.target.value)}
      />
      <br></br>

      <input
        type="password"
        placeholder="contrasena"
        value={contrasena}
        onChange={(e) => setcontrasena(e.target.value)}
      />
      <br></br>
      <button onClick={handleLogin}>
        Ingresar
      </button>
    </div>
  )
}

export default Login
