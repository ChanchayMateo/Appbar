import React from 'react'

const User = ({user, delUser}) => {
  return (
    <tr>
      <td style={{ padding: '15px 20px', borderBottom: '1px solid #eaeaea' }}>{user._id}</td>
      <td style={{ padding: '15px 20px', borderBottom: '1px solid #eaeaea' }}>{user.name}</td>
      <td style={{ padding: '15px 20px', borderBottom: '1px solid #eaeaea' }}>
        <button onClick={() => delUser(user._id)}>Delete</button>
      </td>
    </tr>
  )
}

export default User