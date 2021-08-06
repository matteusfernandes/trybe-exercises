import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      muser: [],
    }

    this.fetchMuser = this.fetchMuser.bind(this);
    this.renderMuserElement = this.renderMuserElement.bind(this);
  }

  fetchMuser = () => {
    this.setState({ loading: true }, () => {
      fetch('https://api.randomuser.me/')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          muser: data.results[0],
        })
      })
    })
  }

  renderMuserElement() {
    return (
      <div>
        <img src={this.state.muser.picture.thumbnail} alt={this.state.muser.name.first} />
        <p>{`Nome: ${this.state.muser.name.first} ${this.state.muser.name.last}`}</p>
        <p>{`Email: ${this.state.muser.email}`}</p>
        <p>{`Idade: ${this.state.muser.dob.age}`}</p>
      </div>
    );
  }

  componentDidMount() {
    this.fetchMuser();
  }

  shouldComponentUpdate({ muser }) {
    if (muser !== undefined) {
      console.log('oi')
      return muser.dob.age <= 50;
    }
    return true;
  }

  render() {
    const { loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <p>{loading ? loadingElement : this.renderMuserElement()}</p>
      </div>
    );
  }
}

export default App;
