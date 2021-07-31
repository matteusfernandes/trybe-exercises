import React, { Component } from 'react';

class Description extends Component {
  render() {

    const { value, handleChange } = this.props;
    
    return (
      <label>
        Descrição do cargo:
        <input
          type="text"
          name="description"
          maxLength="500"
          required
          value={value}
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default Description;