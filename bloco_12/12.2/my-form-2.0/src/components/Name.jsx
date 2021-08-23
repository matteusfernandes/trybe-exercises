import React, { Component } from 'react';

class Name extends Component {
  render() {

    const { value, handleChange } = this.props;

    return (
      <label>
        Nome:
        <input
          type="text"
          name="name"
          id="name"
          maxLength="40"
          value={value}
          onChange={handleChange}
          required
        />
      </label>
    );
  }
}

export default Name;