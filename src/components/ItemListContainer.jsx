import React, {useState, useEffect} from 'react'
import json from "../json/productos.json"
import categories from "../json/categorias.json"
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {

  let {categoryId} =useParams()
  console.log(categoryId)
  
 let [productos, setProductos] = useState ([])

 let [titulo, setTitulo] = useState("Productos")


  const pedirProducto = () => {
    return new Promise ((resolve, reject ) => {
      setTimeout(() => {
        resolve(json) 
      }, 1000)
  })
  }

  useEffect(() => {
    
      pedirProducto()
      .then((res) => {
        if (categoryId) {
          setTitulo(categories.find((cat) =>cat.id === categoryId).nombre)
          setProductos(res.filter((prod) => prod.categoria.id === categoryId))
        }else{
          setTitulo("Prodcutos")
          setProductos(res)
        }
      })
    
  }, [categoryId])
  

  return (
    
    <div className='p' >
      <h1>{titulo}</h1>
      <ItemList productos={productos}/>
    </div> 
  )
}


