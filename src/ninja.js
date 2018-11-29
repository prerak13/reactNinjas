import React, { Component } from 'react';


class Ninja extends Component {
  

  render() {

    const nlist=this.props.ninjas.map(ninja=>{
      return (
        <div key={ninja.id}>{ninja.name}<br/></div>
      )
    })

    return (
      
      <div>NAME={nlist }</div>
    );
  }
}

export default Ninja;
