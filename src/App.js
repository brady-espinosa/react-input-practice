import React, { Component } from 'react';
import './App.css';
import UserDataForm from './UserDataForm'
import UserData from './UserData'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userData: {
        firstName: '',
        lastName:'',
        email:''
      }
    }
  }
  userDataUpdated(userData){
   this.setState({userData: userData})
 }
  render() {
    return (
      <div className="App">
        <h1> Keatons Keys to Victory </h1>
        <UserDataForm
          userData={this.state.userData}
          userDataUpdated={this.userDataUpdated.bind(this)}
        />
        <UserData userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
