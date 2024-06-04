import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import json from "../json/productos.json"
import { ItemDetail } from './ItemDetail'

export const IntemDetailContainer = () => {

  let {itemId} = useParams ()
  let [producto, setProducto] = useState()

  useEffect(() => {
    setProducto(json.find((prod) => prod.id === parseInt(itemId)))
  }, [itemId])
  


  return (
    <div>{producto ? 
    <ItemDetail key={producto.id} producto={producto} />  
    :"cargando..."}</div>
  )
}



