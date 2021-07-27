import { Component } from 'react';
import Pokemon from './Pokemon';
import '../index.css';

class Pokedex extends Component {
  render() {

    const { pokemons } = this.props;

    return (
      pokemons.map((pokemon) => <div className="pokedex">
        <Pokemon key={pokemon.id} pokemon={ pokemon } />
      </div>)
    );
  }
}

export default Pokedex;