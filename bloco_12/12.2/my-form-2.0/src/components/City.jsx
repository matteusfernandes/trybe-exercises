import React, { Component } from 'react';

class City extends Component {
  render() {

    const { value, handleBlur, handleChange } = this.props;
    
    return (
      <label>
        Cidade:
        <input
          type="text"
          name="city"
          id="city"
          maxLength="28"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
      </label>
    );
  }
}

export default City;