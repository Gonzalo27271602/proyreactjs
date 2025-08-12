import './ItemDetail.css';
import Count from '../Count/Count';
import { useContext } from 'react';
import { Context } from '../Context/Context';

const ItemDetail = ({product = {}}) => {
  const {addProductInCart} = useContext(Context);

  const addProduct = (quantity) => {  
    const productCart = {...product, quantity};
      addProductInCart (productCart);
  }

  return (
    <div className='pagedetail'>
        <div className='imgdetail'>
          <img src={product.image} alt="Imagen del producto" />
        </div>
        <div className='productdetail'>
          <p className='titledetail'>{product.name}</p>
          <p className='textdetail'>{product.description}</p>
          <p className='pricedetail'>{product.price}</p>
          <Count stock={product.stock} addProduct={addProduct}/>
        </div>
    </div>
  )
}

export default ItemDetail;