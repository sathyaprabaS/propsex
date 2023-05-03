import React from 'react'
import { useState } from 'react'
import child from './child'

function parent() {
    const [user, setUser] = useState({
        name: "",
      email:""  
    })
    const sendData = (user) => {
        setUser(user)
    }
    return (
      <div>
      <child sendData={sendData}
            />
            <bold>{user.name}</bold>
            <bold>{ user.email}</bold>
            </div>
  )
}

export default parent