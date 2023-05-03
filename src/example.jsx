import React from 'react'
import Home from './Anout';
import About from './Anout';

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

export default example