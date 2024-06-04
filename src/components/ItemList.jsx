import React from 'react'
import { Item } from './Item'

export const ItemList = ({productos}) => {
    return (
        <div className='productos-grillas'>
            {
                productos.length > 0 ?
                    productos.map(producto => {
                        return <Item key={producto.id} producto={producto} />
                    })
                    : <p>No Hay productos</p>}
        </div>
    )
}
