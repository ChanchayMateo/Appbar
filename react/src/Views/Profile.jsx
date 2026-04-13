import React from 'react'
import foto from '../assets/dinosaurio.png'

const Profile = ({user}) => {
  return (
    <div>
      <h2>Profile</h2>
      <br></br>
      <h1> Nombre: {user.name}</h1>
      <h2>id: {user._id}</h2>
      <img
        src={foto}
      />
    </div>



  )
}

export default Profile
