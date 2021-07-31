import React, { Component } from 'react';

class Abstract extends Component {
  render() {

    const { value, handleChange } = this.props;
    
    return (
      <label>
        Resumo do currículo:
        <textarea
          name="abstract"
          cols="30"
          rows="2"
          required
          maxLength="1000"
          value={value}
          onChange={handleChange}
        ></textarea>
      </label>
    );
  }
}

export default Abstract;