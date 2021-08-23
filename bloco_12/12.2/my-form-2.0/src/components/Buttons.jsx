import React, { Component } from 'react';
import Button from './Button';

class Buttons extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div>
        <Button name="Enviar" type="submmit"/>
        <Button name="Limpar" type="reset"/>
      </div>
    );
  }
}

export default Buttons;