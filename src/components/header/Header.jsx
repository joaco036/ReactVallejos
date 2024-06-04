import React from 'react'
import { NavBar } from './NavBar'
import { Carrito } from './Carrito'
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className='header'>
        <Link to="/"><h1>Kaguagonga</h1></Link>
        <NavBar/>
        <Carrito/>
    </header>
  )
}
