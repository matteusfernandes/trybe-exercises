import React, { Component } from 'react';
import Abstract from './Abstract';
import Cargo from './Cargo';
import Description from './Description';


class LastJob extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleMouse = this.handleMouse.bind(this);

    this.state = {
      abstract: '',
      cargo: '',
      mousenter: false,
      description: '',
    }
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleMouse() {
    alert('Preencha com cuidado esta informação.');
  }

  render() {
    return (
      <fieldset>
        <legend>Dados do Último Emprego</legend>
        <Abstract value={this.state.abstract} handleChange={this.handleChange} />
        <Cargo value={this.state.cargo} handleChange={this.handleChange} handleMouse={this.handleMouse} />
        <Description value={this.state.description} handleChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default LastJob;