import { useEffect, useState } from "react";
import getProducts from '../data/products.js';

const useProducts = () => {
    //EL USE STATE ES PARA QUE CUANDO LLEGA LA INFO SE GUARDE EN NUNESTRA ARIABLE DE ESTADO
    const [products, setProducts] = useState ([]);
    const [loading, setLoading] = useState (true);

    //EL USE STATE ES PARA QUE SE EJECUTE UNA SOLA VEZ Y CADA VEZ QUE SE ACTUALIZA LA VISTA SE VUELVA A RENDERIZAR.
    useEffect (() => {

        //consumimos la funcion con .then para usar el intervalo de timepo
        getProducts()
            .then((data) => {
                setProducts(data);
        })

            //UTILIZAMOS EL METODO PARA FINALIZAR 
            .finally (() => {
                setLoading(false);
        })

    }, []);

    //RETORNAMOS LA VARIABLE DE ESTADO PRODUCTS Y LA VARIABLE DE ESTADO LOADING
    return {products, loading};
}

export default useProducts;