import { createContext, useState } from "react";

const Context = createContext();
  
const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addProductInCart = (product) => {
    setCart([...cart, product]);
  };
  
  const totalQuantity = () => {
    const total = cart.reduce((total, product) => total + product.quantity, 0);
    return total;
  };

  const totalPrice = () => {
    const total = cart.reduce((total, product) => total + (product.quantity * product.price), 0);
    return total;
  };

  const eliminarproductoById = (id) => {
    const productoEliminado = cart.filter((product) => product.id !== id);
    setCart(productoEliminado);
  };

  const actualizarCantidad = (id, nuevaCantidad) => {
    const actualizarCarrito = cart.map((product) => {
      if (product.id === id) {
        return {...product, quantity: nuevaCantidad};
      }
    return product;
    });
    setCart(actualizarCarrito)
  };

  const deleteCart = () => {
    setCart([])
  };

  return (
    <Context.Provider value={{cart, addProductInCart, totalQuantity, totalPrice, eliminarproductoById, actualizarCantidad, deleteCart}}>
        {children}
    </Context.Provider>
  )
};

export {Context, CartProvider};