import {ItemList} from '../ItemList/ItemList';
import './itemlistcontainer.css';
import useProducts from "../../hooks/useProducts";
import Loading from '../Loading/Loading';

const ItemListContainer = () => {
  const {products, loading} = useProducts();

  return (
    <main>
      <h2>Bienvenido a mi e-commerce</h2>
      {
        loading ? <Loading /> : <ItemList products = {products} />
      }
    </main>
  )
}

export default ItemListContainer;