import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/listcontainer/ItemListContainer';
import { ItemListWithSearch } from './components/ItemList/ItemList';

function App() {

  return (
    <div className="app-container">
      <NavBar />
      <ItemListContainer />
      <ItemListWithSearch />
    </div>
  )
}

export default App;
