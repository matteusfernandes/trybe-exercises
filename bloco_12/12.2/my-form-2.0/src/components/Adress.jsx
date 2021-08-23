import React, { Component } from 'react';

class Adress extends Component {
  render() {

    const { value, handleChange } = this.props;
    
    return (
      <label>
        Endereço:
        <input
          type="text"
          name="adress"
          id="adress"
          maxLength="200"
          value={value}
          onChange={handleChange}
          required
        />
      </label>
    );
  }
}

export default Adress;