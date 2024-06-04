import React from 'react'

export const ItemDetail = ({producto}) => {
  return (
    <div>
        <img src={producto.imagen}/>
        <h2 className='texto-producto'>{producto.nombre}</h2>
        <p className='texto-producto'>${producto.precio}</p>
        <p className='texto-producto'>{producto.descripcion}</p>
    </div>
  )
}
