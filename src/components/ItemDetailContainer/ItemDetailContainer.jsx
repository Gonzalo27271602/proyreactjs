import React from "react";
import useProduct from "../../hooks/useProduct.js";
import Loading from '../Loading/Loading';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const {product, loading} = useProduct();

    console.log(product)
    return (
        <div>
            {
                loading ? <Loading /> : <ItemDetail product = {product}/>
            }
        </div>
    )
}

export default ItemDetailContainer;