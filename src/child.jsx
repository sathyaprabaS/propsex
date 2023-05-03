import React from 'react'

function child() {
        const user = {
            name: "sathyapraba",
            email: "sathya@gmail.com",
        }
        const onclickevent = () => {
            props.sendData(user)
        
    }
  return (
      <div>
          <button onClick={onclickevent}>click</button>
          </div>
      
  )
}

export default child