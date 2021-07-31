import React, { Component } from 'react';

class Button extends Component {
  render(){
    const { name, type } = this.props;
    return (
      <button
        type={type}
      >{name}
      </button>
    );
  }
}

export default Button;