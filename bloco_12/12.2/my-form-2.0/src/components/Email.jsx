import React, { Component } from 'react';

class Email extends Component {
  render() {

    const { value, handleChange } = this.props;

    return (
      <label>
        E-mail:
        <input
          type="email"
          name="email"
          id="email"
          maxLength="50"
          value={value}
          onChange={handleChange}
          required
        />
      </label>
    );
  }
}

export default Email;