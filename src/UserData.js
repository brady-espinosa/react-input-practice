import React, { Component } from 'react'

class UserData extends Component {
  render() {
    const userData = this.props.userData

    return (
      <div>
        <h3>User Data</h3>
        <ul>
          <li>First Name: {userData.firstName}</li>
          <li>Last Name: {userData.lastName}</li>
          <li>Email: {userData.email}</li>
        </ul>
      </div>
    );
  }
}

export default UserData;
