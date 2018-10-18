import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos/Todos';

import { Provider } from 'react-redux';

import { createAppStore } from './state/stores/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={createAppStore()}>
          <Todos/>
        </Provider>
      </div>
    );
  }
}

export default App;
