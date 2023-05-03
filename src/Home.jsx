import React from 'react'
import App from './App'
function Home(props) {
    return (
      <>
        <div style={{ color: 'red' }}> From Home</div>
        <h2>{props.firstname}</h2>
        <h2>{props.lastname}</h2>
            </>
  )
}

export default Home