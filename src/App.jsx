import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/listcontainer/ItemListContainer';
import { ItemListWithSearch } from './components/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/Context/Context';
import Cart from './components/cart/Cart';
import Checkout from './components/Checkout/Chekcout';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>  
        <div className="app-container">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/Checkout' element={<Checkout />} />
            <Route path='*' element={<div>Error 404</div>} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;
