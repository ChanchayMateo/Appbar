import { useState, useEffect } from "react"

const API_URL = "https://practicarestapi-production.up.railway.app/api"
const useAdmin = (token) => {
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        const res = await fetch(API_URL + "/users", {headers:{authorization:token}})
        const data = await res.json()
        setUsers(data)
    }
    const delUser = async (id) => {
    setUsers(users.filter((u) => u._id !== id))
    await fetch(API_URL + "/users/" + id,{headers: {authorization:token}}, {method: "DELETE" })
    // api elimine
  }
    const addUser = async (newUser) => {
    const res = await fetch(API_URL + "/users", {
        method: "POST",
        headers: {
        "Content-Type": "application/json", authorization:token
        },
        body: JSON.stringify(newUser)
    })
    const data = await res.json()
    setUsers([...users, data])
    }
    return { users, getUsers, delUser, addUser }
}

export default useAdmin
