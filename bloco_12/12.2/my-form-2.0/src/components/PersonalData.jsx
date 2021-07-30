import React, { Component } from 'react';
import Name from './Name';
import Email from './Email'

class PersonalData extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value.toUpperCase();

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <Name value={this.state.name} handleChange={this.handleChange} />
        <Email value={this.state.email} handleChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default PersonalData;