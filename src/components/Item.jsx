import React from 'react'
import { Link } from "react-router-dom"

export const Item = ( {producto} ) => {
  return (
    <div className='producto'>
        <img src={producto.imagen}/>
        <h2 className='texto-producto'>{producto.nombre}</h2>
        <p className='texto-producto'>{producto.precio}</p>
        <p className='texto-producto'>{producto.descripcion}</p>
        <Link to={`/item/${producto.id}`}>Ver más</Link>
    </div>
  )
}
