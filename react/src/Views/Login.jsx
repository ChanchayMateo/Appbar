import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

const Login = ({ login }) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onsubmit = async (e) => {
    e.preventDefault()

    if (!username || !password) {
      alert("Credenciales vacías")
      return
    }

    const res = await login({ username, password })

    if (res.login === true) {
      setUsername("")
      setPassword("")
      navigate("/profile")
    } else {
      alert("Credenciales incorrectas")
    }
  }

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          width: 350,
          borderRadius: 3
        }}
      >
        <Typography variant="h5" textAlign="center" mb={3}>
          Iniciar Sesión
        </Typography>

        <form onSubmit={onsubmit}>
          <TextField
            label="Usuario"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, py: 1.2 }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  )
}

export default Login