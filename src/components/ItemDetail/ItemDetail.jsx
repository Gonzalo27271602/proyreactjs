import React from 'react'


const ItemDetail = ({product} = {}) => {
  return (
    <div>
        <img src={product.image} alt="Imagen del producto" />
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
    </div>
  )
}

export default ItemDetail