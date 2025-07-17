import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/listcontainer/ItemListContainer';
import { ItemListWithSearch } from './components/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:category' element={<ItemListContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
