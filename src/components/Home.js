import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='buttons'>
        <h1>React Projects</h1>
        <Link to={"/element-transfer"} className='button'>Element Transfer      👈Click me</Link>
        <Link to={"/list"} className='button'>Nested List      👈Click me</Link>    
        <Link to={"/hit-game"} className='button'>Hit Game    👈Click me</Link>
    </div>
  )
}

export default Home