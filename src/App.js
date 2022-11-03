import React, { Component } from 'react'
import Addapi from './Component/Addapi'
import Form from './Component/Form'
import Navbar from './Component/Navbar'
import Display from './Component/Display'

export default class App extends Component {
  state = {
    personData: []
  }

  addData = (user) => {
    console.log(user);
    let personData = [...this.state.personData, user];

    this.setState({
      personData
    });
  }
  render() {
    return (
      <div>
        <Navbar/>
        
        <Addapi/>
        <br/><br/>

        <Form addData={this.addData}/>
        <br/><br/>
        <hr/>
        <Display personData={this.state.personData} />
      </div>
    )
  }
}
