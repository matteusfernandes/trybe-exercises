import React, { Component } from 'react';
import Name from './Name';
import Email from './Email'
import Cpf from './Cpf'
import Adress from './Adress'
import City from './City'

class PersonalData extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: 0,
      adress: '',
      city: '',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    let value = target.value;

    if (name === 'name') {
      value = target.value.toUpperCase();
    }

    if(name === 'adress') {
      value = target.value.replace(/[^a-z0-9]/gi,'');
    }

    this.setState({
      [name]: value,
    });
  }

  handleBlur(event) {
    if ((event.target.value).match(/^\d/)) {
      event.target.value = (event.target.value).replace(/^\d/, '');
    }

    this.handleChange(event);
  }

  render() {
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <Name value={this.state.name} handleChange={this.handleChange} />
        <Email value={this.state.email} handleChange={this.handleChange} />
        <Cpf value={this.state.cpf} handleChange={this.handleChange} />
        <Adress value={this.state.adress} handleChange={this.handleChange} />
        <City value={this.state.city} handleBlur={this.handleBlur} handleChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default PersonalData;