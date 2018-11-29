import React, { Component } from 'react';
import Ninja from './ninja';

class App extends Component {
  handleOnClick(e) {
    console.log(e.target);
  }

  state = {
    ninjas: [
      { name: '1', id: 1 },
      { name: '2', id: 2 },
      { name: '3', id: 3 }
    ]
  };

  render() {
    return (
      <Ninja ninjas={this.state.ninjas} />


    );
  }
}

export default App;
