import { useState, useEffect } from "react"

const API_URL = "https://practicarestapi-production.up.railway.app/api"
const useAuth = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [token, setToken] = useState('')
    const [user, setUser] = useState({})
    const login = async (userData) => {
    try {
      const res = await fetch(API_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      })

      const data = await res.json()

      setIsLogin(data.login)
      setUser(data.user)
      setToken(data.token)

      return data
        } catch (error) {
        console.error(error)
        return { login: false }
        }
    }
    return { isLogin, token, user, login }
}

export default useAuth
