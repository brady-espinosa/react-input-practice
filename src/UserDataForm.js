import React, { Component } from 'react';


class UserDataForm extends Component {
  constructor(props){
    super(props)
    this.state = props.userData
  }


  handleChange(event){
    const target = event.target
    const attribute = target.name
    const value = target.value
    this.setState({[attribute]: value})
  }

  handleSubmit(event){
    this.props.userDataUpdated(this.state)
    event.preventDefault()
  }




  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} >
        <div className='form-group'>
          <label className='control-label'>
            First Name
          </label>
          <input
            name='firstName'
            type='text'
            value={this.props.firstName}
            onChange={this.handleChange.bind(this)}
            className='form-control'
          />
          </div>
          <br/>
          <div>
          <label className='control-label'>
            Last Name
          </label>
          <input
            name='lastName'
            type='text'
            value={this.props.lastName}
            onChange={this.handleChange.bind(this)}
            className='form-control'
          />
          </div>
          <br/>
          <div>
          <label className='control-label'>
            Email
          </label>
          <input
            name='email'
            type='text'
            value={this.props.firstName}
            onChange={this.handleChange.bind(this)}
            className='form-control'
          />
          </div>
          <br/>
          <input
            type='submit' value='Submit' />

        </form>

    );
  }
}

export default UserDataForm;
