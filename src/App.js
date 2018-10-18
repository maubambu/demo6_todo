import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos/Todos';
import { Provider } from 'react-redux';
import { createAppStore } from './state/stores/App';

class App extends Component {
  render() {
    return (
      <Provider store={createAppStore()}>
        <div className="App">
          <Todos>
          </Todos>
        </div>
      </Provider>
    );
  }
}

export default App;
