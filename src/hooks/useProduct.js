import { useEffect, useState } from "react"
import { getProductsById } from "../data/products";

const useProduct = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

    useEffect (() => {
        getProductsById(2)
            .then((data) => {
                setProduct(data);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    return {product, loading};
};

export default useProduct;