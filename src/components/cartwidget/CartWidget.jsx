import carrito from"../../assets/carrito.jpg";
import "./CartWidget.css";


const CartWidget = () => {
  return (
    <div className="cartwidget">
        <img src= {carrito} width="50" height="50" alt="Logo carrito" />
        <span className="cart-badge">15</span>
    </div>
  );
};

export default CartWidget;