import { useState, useContext } from "react";
import { Context } from "../Context/Context";
import FormCheckout from "../FormCheckout/FormCheckout";
import { addDoc, collection } from "firebase/firestore";
import DB from "../../DB/DB.js";

const Checkout = () => {

  const [dataForm, setDataForm] = useState ({
    fullname: "",
    phone: "",
    email: "",    
  })

  const [orderId, setOrderId] = useState(null);
  const {cart, totalPrice} = useContext(Context);

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name] : event.target.value});
  }

  const sendOrder = (event) => {
    event.preventDefault();

    const order = {
      buyer: {...dataForm},
      products: [...cart],
      total: totalPrice()
    }

  uploadOrder(order);
  }

  const uploadOrder = async(order) => {
    try {
      const orderRef = collection(DB, "orders");
      const response = await addDoc(orderRef, order);
      
      setOrderId(response.id);
    } catch (error) {
      console.log("Error al subir la orden")
    }
  }

  return (
    <div>
      {
        orderId ?
        (
          <div>
            <h2>Orden generada correctamente</h2>
            <p>Conserve el id de su compra: {orderId}</p>
          </div>
        ) : 
        (
        <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} sendOrder={sendOrder}/>
        )
      }
    </div>
  )
}

export default Checkout;