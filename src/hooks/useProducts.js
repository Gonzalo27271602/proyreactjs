import { useEffect, useState } from "react";
import {getProducts} from '../data/products.js';

const useProducts = (category) => {
    //EL USE STATE ES PARA QUE CUANDO LLEGA LA INFO SE GUARDE EN NUNESTRA ARIABLE DE ESTADO
    const [products, setProducts] = useState ([]);
    const [loading, setLoading] = useState (true);

    //EL USE STATE ES PARA QUE SE EJECUTE UNA SOLA VEZ Y CADA VEZ QUE SE ACTUALIZA LA VISTA SE VUELVA A RENDERIZAR.
    useEffect (() => {
        setLoading(true);

        //consumimos la funcion con .then para usar el intervalo de timepo
        getProducts()
            .then((data) => {
                if(category) {
                //(filtra la info por categoria)
                    const productsFilter = data.filter((product) => product.category === category);
                    setProducts(productsFilter);
                } else{
                //guardamos toda la info
                    setProducts(data);
                }
        })

            //UTILIZAMOS EL METODO PARA FINALIZAR 
            .finally (() => {
                setLoading(false);
        })

    }, [category]);

    //RETORNAMOS LA VARIABLE DE ESTADO PRODUCTS Y LA VARIABLE DE ESTADO LOADING
    return {products, loading};
}

export default useProducts;