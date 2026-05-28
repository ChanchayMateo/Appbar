import React from 'react'
import {Link} from 'react-router-dom'
const User = ({user, delUser}) => {
  return (
    <tr>
      <td style={{ padding: '15px 20px', borderBottom: '1px solid #eaeaea' }}><Link to= {"/users/"+ user._id+"?react=889"}> {user._id}</Link></td>
      <td style={{ padding: '15px 20px', borderBottom: '1px solid #eaeaea' }}>{user.name}</td>
      <td style={{ padding: '15px 20px', borderBottom: '1px solid #eaeaea' }}>
        <button onClick={() => delUser(user._id)}>Delete</button>
      </td>
    </tr>
  )
}

export default User