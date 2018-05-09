import React, { Component } from 'react';
import Router from './src/Router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers'

class App extends Component {
  render(){
    return(
      <Provider store={createStore(reducers)} >
        <Router />
      </Provider>
    )
  }
}



export default App;