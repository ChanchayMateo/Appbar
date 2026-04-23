import React, { useState } from "react";

const Add = ({ addUser }) => {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onsubmit = (e) => {
    e.preventDefault()

    if (!name || !username || !password) {
      alert("Campos vacíos")
      return
    }

    addUser({ name, username, password })

    setName("")
    setUsername("")
    setPassword("")
  }

  return (
    <form onSubmit={onsubmit}>
      <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
      <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>
      <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
      <button type="submit">Add</button>
    </form>
  )
}

export default Add