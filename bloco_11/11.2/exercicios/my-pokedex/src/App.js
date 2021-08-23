import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <h1>POKEDEX</h1>
      <Pokedex pokemons={ pokemons } />
    </div>
  );
}

export default App;
