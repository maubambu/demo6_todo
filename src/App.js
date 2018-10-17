import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos>
        </Todos>
      </div>
    );
  }
}

export default App;
