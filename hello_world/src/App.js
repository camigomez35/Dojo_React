import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
        inputTexto : '',
        outputTexto: ''
      }
      this.textChanged = this.textChanged.bind(this)
  }

  textChanged(event){
    var name = event.target.value
    this.setState({outputTexto: name})
    this.setState({inputTexto: name})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <input type='text' onChange={this.textChanged}
                value={this.state.inputTexto}/>
                <br/>
          <a>Hola {this.state.outputTexto}, como estas?</a>
          </div>
      </div>
    );
  }
}

export default App;
