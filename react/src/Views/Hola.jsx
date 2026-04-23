import React from 'react'
import User from '../Componentes/User'
import Add from '../Componentes/Add'

const Hola = ({ users, delUser, addUser }) => {
  return (
    <>
    <Add addUser={addUser} />
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Delete?</th>
        </tr>
      </thead>

      <tbody>
        {users.map((u) => (
          <User key={u._id} user={u} delUser={delUser} />
        ))}
      </tbody>
    </table>
    </>
  )
}

export default Hola