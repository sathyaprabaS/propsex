import React from 'react'

function About(props) {
    return (
      <>
        <div style={{ color: 'red' }}> From About</div>
        <h2>{props.userDetails.fname}</h2>
        <h2>{props.userDetails.lname}</h2>
        <h2>{props.userDetails.age}</h2>
        <h2>{props.userDetails.gender}</h2>

            </>
  )
}

export default About