import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home'
import About from './About'
function App() {
  const userDetails = {
    fname: "sashvitha",
    lname: "s",
    age: 2,
    gender: "female"
  };
  return (
    <>
      <Home firstname="sathya" lastname="praba" />
      <About userDetails={userDetails} />
    </>
  )
}

export default App
