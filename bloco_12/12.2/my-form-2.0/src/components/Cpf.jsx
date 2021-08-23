import React, { Component } from 'react';

class Cpf extends Component {
  render() {

    const { value, handleChange } = this.props;
    
    return (
      <label>
        CPF:
        <input
          type="text"
          name="cpf"
          id="cpf"
          maxLength="11"
          value={value}
          onChange={handleChange}
          required
        />
      </label>
    );
  }
}

export default Cpf;