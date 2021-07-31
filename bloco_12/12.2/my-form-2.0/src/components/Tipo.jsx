import React, { Component } from 'react';

class Tipo extends Component {
  render() {

    const { handleChange } = this.props;
    
    return (
      <label>
        Tipo:
        <input
          type="radio"
          name="tipo"
          value="Casa"
          onChange={handleChange}
          required
       />Casa
       <input
         type="radio"
         name="tipo"
         value="Apartamento"
         onChange={handleChange}
         required
       />Apartamento
      </label>
      
    );
  }
}

export default Tipo;