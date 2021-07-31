import React, { Component } from 'react';

class Cargo extends Component {
  render() {

    const { value, handleChange, handleMouse } = this.props;
    
    return (
      <label>
        Último cargo ocupado:
        <textarea
          name="abstract"
          cols="30"
          rows="2"
          required
          maxLength="40"
          value={value}
          onChange={handleChange}
          onMouseEnter={handleMouse}
        ></textarea>
      </label>
    );
  }
}

export default Cargo;