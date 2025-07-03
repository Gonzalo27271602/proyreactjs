import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/listcontainer/ItemListContainer';

function App() {
  
  const saludo = ("");

  return (
    <div className="app-container">
      <NavBar />
      <h2>{saludo}</h2>
      <ItemListContainer saludo = {"Bienvenidos a mi e-commers"} />
    </div>
  )
}

export default App
