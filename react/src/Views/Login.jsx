import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'


const Login = ({login}) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const onsubmit = async (e) => {
    e.preventDefault()
    if (!username || !password ){
      alert("Credenciales vacias")
      return
    }
    const  res = await login({username:username, password:password})
    if (res.isLogin === true){
      setUsername("")
      setPassword("")
      navigate("/profile")

    } else{
      alert("Credenciales incorrectas")
    }
  }

  return (
    <form onSubmit={onsubmit}>
      <TextField value = {username} onChange={(e)=>setUsername(e.target.value)}></TextField>
      <TextField value = {password} onChange={(e)=>setPassword(e.target.value)}></TextField>
      <Button Type= 'submit'> Login </Button>
    </form>
  )
}

export default Login
