import React, { Component } from 'react';

class Estado extends Component {
  render() {

    const { value, handleChange, estados } = this.props;
    
    return (
      <label>
        Estado:
        <select
          name="estado"
          value={value}
          onChange={handleChange}
          required
        >
          {estados.map((estado) => 
            <option key={estado.abv}
              value={estado.name}>
              {estado.name}
            </option>)}
        </select>
      </label>
    );
  }
}

export default Estado;