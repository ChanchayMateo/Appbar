import react from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Details = ({ users }) => {
    const { username } = useParams()
    const [searchParams] = useSearchParams()
    const user = users.find((u) => u._id === username)
    return (
        <div>
            Details
            <p> ID: {username}</p>
            <p> valor del parametro react = {searchParams.get('react')}</p>
            <p> Nombre del usuario: {user.name}</p>
            <p> Contraseña: {user.password}</p>
            <p> username del usuario: {user.username}</p>
        </div>
    )
}

export default Details