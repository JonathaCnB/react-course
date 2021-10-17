import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handlePClick = this.handlePClick.bind(this); //TODO: linha 13
  //   this.state = {
  //     name: 'Jonatha Carlos',
  //     counter: 0
  //   }
  // }

  state = {
    name: 'Jonatha Carlos',
    counter: 0
  }

  handlePClick = () => {
    const { name } = this.state
    console.log(`Click ${ name }`)
    this.setState({name:'Carneiro'})
  }

  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1});
  }

  render() {
    //const name = this.state.name;
    //TODO: Linha 9
    const {name, counter} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p onClick={() => console.log('Clico')}>
            {name} TODO: Linha 11
          </p> */}
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
