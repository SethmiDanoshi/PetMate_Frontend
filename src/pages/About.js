import React from 'react'
import {useNavigate } from 'react-router-dom'

function About() {
    const Navigate = useNavigate();
  return (
    <div>
      <h1>this is about page</h1>
      <button onClick={()=> Navigate(-1)}>Back</button>
    </div>
  )
}

export default About
