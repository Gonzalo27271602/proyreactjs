import { useContext } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, totalPrice, eliminarproductoById, deleteCart} = useContext(Context);

  return (
    <div>
        <h2>Mi carrito de productos</h2>
        {
            cart.map((productCart) => (
                <div key={productCart.id}>
                    <img src={productCart.image} alt="imagen" width={100}/>
                    <p>{productCart.name}</p>
                    <p>Precio unitario: ${productCart.price}</p>
                    <p>Cantidad: {productCart.quantity}</p>
                    <p>Precio parcial: ${productCart.price * productCart.quantity}</p>
                    <button onClick={ () => {eliminarproductoById(productCart.id)}}>Eliminar</button>
                </div>
            ))
        }
        <p>Precio total: u$d{totalPrice()}</p>
        <Link to="/CheckOut">Continuar con la compra</Link>
        <button onClick={deleteCart}>Vaciar carrito</button>
    </div>
  )
};

export default Cart;